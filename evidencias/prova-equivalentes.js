// Prova empírica de que os 4 mutantes que restaram vivos (fatorial, linha 19) são EQUIVALENTES:
// o `if (n === 0 || n === 1) return 1` é redundante porque, para n = 0 e n = 1, o laço não executa e o resultado já é 1.
// Executar: node evidencias/prova-equivalentes.js
const corpo = (guard) => function (n) {
  if (n < 0) throw new Error('neg');
  if (guard(n)) return 1;
  let r = 1;
  for (let i = 2; i <= n; i++) { r *= i; if (i > 200) break; }
  return r;
};
const original = corpo((n) => n === 0 || n === 1);
const mutantes = {
  '#31 if(false)':              corpo(() => false),
  '#32 || -> &&':               corpo((n) => n === 0 && n === 1),
  '#33 (n===0) -> false':       corpo((n) => false || n === 1),
  '#35 (n===1) -> false':       corpo((n) => n === 0 || false),
};
const executa = (f, n) => { try { return { r: f(n) }; } catch (e) { return { e: e.constructor.name + ':' + e.message }; } };
const igual = (a, b) => ('e' in a || 'e' in b) ? a.e === b.e : Object.is(a.r, b.r) && typeof a.r === typeof b.r;
const conta = (v) => { const c = { calls: 0 }; return { o: { valueOf() { c.calls++; return v; }, toString() { c.calls++; return String(v); } }, c }; };

const inteiros = Array.from({ length: 171 }, (_, i) => i);
const exoticos = [-0, 0.5, 1.5, -0.5, NaN, '0', '1', '2', 'abc', '', null, undefined, true, false, [], [1], [0], {}, 0n, 1n, 2n, -1n, Number.MIN_VALUE, Symbol.iterator];

const linhas = [];
for (const [nome, f] of Object.entries(mutantes)) {
  let total = 0, dif = 0;
  for (const v of [...inteiros, ...exoticos]) { total++; if (!igual(executa(original, v), executa(f, v))) dif++; }
  for (const v of [0, 1, 2, 3, NaN, -0, 0.5]) { // objetos com valueOf: compara também o nº de coerções
    total++; const x = conta(v), y = conta(v);
    if (!igual(executa(original, x.o), executa(f, y.o)) || x.c.calls !== y.c.calls) dif++;
  }
  linhas.push({ mutante: nome, entradas_testadas: total, divergencias: dif });
}
console.table(linhas);
process.exit(linhas.some((l) => l.divergencias > 0) ? 1 : 0);
