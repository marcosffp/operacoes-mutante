const {
  soma, subtracao, multiplicacao, divisao, potencia, raizQuadrada, restoDivisao,
  fatorial, mediaArray, somaArray, maximoArray, minimoArray, valorAbsoluto,
  arredondar, isPar, isImpar, calcularPorcentagem, aumentarPorcentagem,
  diminuirPorcentagem, inverterSinal, seno, cosseno, tangente, logaritmoNatural,
  logaritmoBase10, arredondarParaBaixo, arredondarParaCima, hipotenusa,
  grausParaRadianos, radianosParaGraus, mdc, mmc, isPrimo, fibonacci,
  produtoArray, clamp, isDivisivel, celsiusParaFahrenheit, fahrenheitParaCelsius,
  inverso, areaCirculo, areaRetangulo, perimetroRetangulo, isMaiorQue,
  isMenorQue, isEqual, medianaArray, dobro, triplo, metade
} = require('../src/operacoes');

describe('Suíte de Testes Fraca para 50 Operações Aritméticas', () => {
  // === Testes para o Bloco 1 (1-10) ===
  test('1. deve somar dois números positivos', () => { expect(soma(2, 3)).toBe(5); });
  test('2. deve subtrair dois números positivos', () => { expect(subtracao(5, 2)).toBe(3); });
  test('3. deve multiplicar dois números positivos', () => { expect(multiplicacao(3, 4)).toBe(12); });
  test('4. deve dividir e lançar erro para divisão por zero', () => {
    expect(divisao(10, 2)).toBe(5);
    expect(() => divisao(5, 0)).toThrow();
  });
  test('5. deve calcular a potência com expoente positivo', () => { expect(potencia(2, 3)).toBe(8); });
  test('6. deve calcular a raiz quadrada de um quadrado perfeito', () => { expect(raizQuadrada(16)).toBe(4); });
  test('7. deve retornar o resto da divisão', () => { expect(restoDivisao(10, 3)).toBe(1); });
  test('8. deve calcular o fatorial de um número maior que 1', () => { expect(fatorial(4)).toBe(24); });
  test('9. deve calcular a média de um array com múltiplos elementos', () => { expect(mediaArray([10, 20, 30])).toBe(20); });
  test('10. deve somar um array com múltiplos elementos', () => { expect(somaArray([1, 2, 3])).toBe(6); });

  // === Testes para o Bloco 2 (11-20) ===
  test('11. deve encontrar o valor máximo em um array', () => { expect(maximoArray([1, 50, 10])).toBe(50); });
  test('12. deve encontrar o valor mínimo em um array', () => { expect(minimoArray([10, 2, 100])).toBe(2); });
  test('13. deve retornar o valor absoluto de um número negativo', () => { expect(valorAbsoluto(-5)).toBe(5); });
  test('14. deve arredondar um número para cima', () => { expect(arredondar(9.8)).toBe(10); });
  test('15. deve retornar true para um número par', () => { expect(isPar(100)).toBe(true); });
  test('16. deve retornar true para um número ímpar', () => { expect(isImpar(7)).toBe(true); });
  test('17. deve calcular uma porcentagem simples', () => { expect(calcularPorcentagem(50, 200)).toBe(100); });
  test('18. deve aumentar um valor em uma porcentagem', () => { expect(aumentarPorcentagem(100, 10)).toBeCloseTo(110); });
  test('19. deve diminuir um valor em uma porcentagem', () => { expect(diminuirPorcentagem(100, 10)).toBeCloseTo(90); });
  test('20. deve inverter o sinal de um número positivo', () => { expect(inverterSinal(42)).toBe(-42); });
  
  // === Testes para o Bloco 3 (21-30) ===
  test('21. deve calcular o seno de 0', () => { expect(seno(0)).toBe(0); });
  test('22. deve calcular o cosseno de 0', () => { expect(cosseno(0)).toBe(1); });
  test('23. deve calcular a tangente de 0', () => { expect(tangente(0)).toBe(0); });
  test('24. deve calcular o logaritmo natural de Euler', () => { expect(logaritmoNatural(Math.E)).toBe(1); });
  test('25. deve calcular o logaritmo na base 10', () => { expect(logaritmoBase10(100)).toBe(2); });
  test('26. deve arredondar para baixo', () => { expect(arredondarParaBaixo(5.9)).toBe(5); });
  test('27. deve arredondar para cima', () => { expect(arredondarParaCima(5.1)).toBe(6); });
  test('28. deve calcular a hipotenusa de um triângulo retângulo', () => { expect(hipotenusa(3, 4)).toBe(5); });
  test('29. deve converter graus para radianos', () => { expect(grausParaRadianos(180)).toBeCloseTo(Math.PI); });
  test('30. deve converter radianos para graus', () => { expect(radianosParaGraus(Math.PI)).toBeCloseTo(180); });

  // === Testes para o Bloco 4 (31-40) ===
  test('31. deve calcular o MDC de dois números', () => { expect(mdc(10, 5)).toBe(5); });
  test('32. deve calcular o MMC de dois números', () => { expect(mmc(10, 5)).toBe(10); });
  test('33. deve verificar que um número é primo', () => { expect(isPrimo(7)).toBe(true); });
  test('34. deve calcular o 10º termo de Fibonacci', () => { expect(fibonacci(10)).toBe(55); });
  test('35. deve calcular o produto de um array', () => { expect(produtoArray([2, 3, 4])).toBe(24); });
  test('36. deve manter um valor dentro de um intervalo (clamp)', () => { expect(clamp(5, 0, 10)).toBe(5); });
  test('37. deve verificar se um número é divisível por outro', () => { expect(isDivisivel(10, 2)).toBe(true); });
  test('38. deve converter Celsius para Fahrenheit', () => { expect(celsiusParaFahrenheit(0)).toBe(32); });
  test('39. deve converter Fahrenheit para Celsius', () => { expect(fahrenheitParaCelsius(32)).toBe(0); });
  test('40. deve calcular o inverso de um número', () => { expect(inverso(4)).toBe(0.25); });

  // === Testes para o Bloco 5 (41-50) ===
  test('41. deve calcular a área de um círculo', () => { expect(areaCirculo(10)).toBeCloseTo(314.159); });
  test('42. deve calcular a área de um retângulo', () => { expect(areaRetangulo(5, 4)).toBe(20); });
  test('43. deve calcular o perímetro de um retângulo', () => { expect(perimetroRetangulo(5, 4)).toBe(18); });
  test('44. deve verificar se um número é maior que outro', () => { expect(isMaiorQue(10, 5)).toBe(true); });
  test('45. deve verificar se um número é menor que outro', () => { expect(isMenorQue(5, 10)).toBe(true); });
  test('46. deve verificar se dois números são iguais', () => { expect(isEqual(7, 7)).toBe(true); });
  test('47. deve calcular a mediana de um array ímpar e ordenado', () => { expect(medianaArray([1, 2, 3, 4, 5])).toBe(3); });
  test('48. deve calcular o dobro de um número', () => { expect(dobro(10)).toBe(20); });
  test('49. deve calcular o triplo de um número', () => { expect(triplo(10)).toBe(30); });
  test('50. deve calcular a metade de um número', () => { expect(metade(20)).toBe(10); });
});

// =====================================================================
// Testes adicionados após a análise de mutação (Stryker, 1ª execução: 73,71%).
// Cada bloco mata mutantes NÃO-EQUIVALENTES que sobreviveram (ou não tinham
// cobertura). Os IDs (#nn) referem-se a evidencias/stryker-inicial.json.
// =====================================================================
describe('Mutantes mortos: exceções (mensagem e condição do guard)', () => {
  // #11 StringLiteral: mensagem trocada por "" sobrevivia porque toThrow() não confere a mensagem.
  test('divisao: lança erro com a mensagem exata para divisor zero', () => {
    expect(() => divisao(5, 0)).toThrow(new Error('Divisão por zero não é permitida.'));
  });
  // #16 (if false) e #17 (n <= 0): precisa de negativo E de fronteira 0.
  test('raizQuadrada: negativo lança erro com mensagem; zero é válido', () => {
    expect(() => raizQuadrada(-1)).toThrow(new Error('Não é possível calcular a raiz quadrada de um número negativo.'));
    expect(raizQuadrada(0)).toBe(0);
  });
  // #25, #26 e #29: guard de negativo do fatorial (fronteira em 0).
  test('fatorial: negativo lança erro com mensagem; 0 não lança', () => {
    expect(() => fatorial(-1)).toThrow(new Error('Fatorial não é definido para números negativos.'));
    expect(fatorial(0)).toBe(1);
  });
  // #53, #56, #60, #63: sem o guard, Math.max()/Math.min() devolvem -Infinity/Infinity em vez de lançar.
  test('maximoArray e minimoArray: array vazio lança erro com mensagem', () => {
    expect(() => maximoArray([])).toThrow(new Error('Array vazio не possui valor máximo.'));
    expect(() => minimoArray([])).toThrow(new Error('Array vazio не possui valor mínimo.'));
  });
  // #168 e #171: sem o guard, 1/0 = Infinity.
  test('inverso: zero lança erro com mensagem', () => {
    expect(() => inverso(0)).toThrow(new Error('Não é possível inverter o número zero.'));
  });
  // #196 e #199: sem o guard, a mediana de [] vira NaN em vez de lançar.
  test('medianaArray: array vazio lança erro com mensagem', () => {
    expect(() => medianaArray([])).toThrow(new Error('Array vazio не possui mediana.'));
  });
});

describe('Mutantes mortos: casos de contorno e valores vazios', () => {
  // #45: sem o guard, 0/0 = NaN.
  test('mediaArray: array vazio retorna 0 (e não NaN)', () => {
    expect(mediaArray([])).toBe(0);
  });
  // #19/#20 do laço: precisa de n >= 2 para o for executar (n = 2, 3 e 5).
  test('fatorial: valores 2, 3 e 5 (laço executado)', () => {
    expect(fatorial(2)).toBe(2);
    expect(fatorial(3)).toBe(6);
    expect(fatorial(5)).toBe(120);
  });
});

describe('Mutantes mortos: predicados lógicos (true/false, fronteira)', () => {
  // #68: "return true" sobrevivia porque só havia teste com resposta true.
  test('isPar: ímpar retorna false, zero é par', () => {
    expect(isPar(7)).toBe(false);
    expect(isPar(0)).toBe(true);
    expect(isPar(-4)).toBe(true);
  });
  // #73 e #76 (n % 2 -> n * 2)
  test('isImpar: par retorna false, negativo ímpar retorna true', () => {
    expect(isImpar(8)).toBe(false);
    expect(isImpar(0)).toBe(false);
    expect(isImpar(-3)).toBe(true);
  });
  // #154
  test('isDivisivel: não divisível retorna false', () => {
    expect(isDivisivel(10, 3)).toBe(false);
    expect(isDivisivel(9, 3)).toBe(true);
  });
  // #181 e #183: precisa de a < b e de a === b.
  test('isMaiorQue: menor e igual retornam false', () => {
    expect(isMaiorQue(5, 10)).toBe(false);
    expect(isMaiorQue(5, 5)).toBe(false);
  });
  // #186 e #188
  test('isMenorQue: maior e igual retornam false', () => {
    expect(isMenorQue(10, 5)).toBe(false);
    expect(isMenorQue(5, 5)).toBe(false);
  });
  // #191
  test('isEqual: valores diferentes retornam false', () => {
    expect(isEqual(7, 8)).toBe(false);
    expect(isEqual(0, 0)).toBe(true);
  });
});

describe('Mutantes mortos: isPrimo (guard, laço e divisibilidade)', () => {
  // #115, #116, #118: precisa de n <= 1 (0, 1 e negativo), sobretudo a fronteira n = 1.
  test('isPrimo: 0, 1 e negativos não são primos', () => {
    expect(isPrimo(0)).toBe(false);
    expect(isPrimo(1)).toBe(false);
    expect(isPrimo(-7)).toBe(false);
  });
  // fronteira inferior dos primos: o laço não executa para n = 2.
  test('isPrimo: 2 é o menor primo', () => {
    expect(isPrimo(2)).toBe(true);
  });
  // #119, #121, #123, #125, #127, #128: precisa de composto para o laço achar divisor.
  test('isPrimo: compostos retornam false', () => {
    expect(isPrimo(4)).toBe(false);
    expect(isPrimo(9)).toBe(false);
    expect(isPrimo(15)).toBe(false);
    expect(isPrimo(49)).toBe(false);
  });
  // garante que o laço não devolve false para um primo (mata o mutante que sempre acha divisor).
  test('isPrimo: primos maiores retornam true', () => {
    expect(isPrimo(3)).toBe(true);
    expect(isPrimo(13)).toBe(true);
    expect(isPrimo(97)).toBe(true);
  });
});

describe('Mutantes mortos: clamp (limites inferior e superior)', () => {
  // #146 e #150: sem os ifs o valor fora do intervalo passa direto.
  test('clamp: abaixo do mínimo retorna min; acima do máximo retorna max', () => {
    expect(clamp(-5, 0, 10)).toBe(0);
    expect(clamp(15, 0, 10)).toBe(10);
  });
  // valores exatamente em min e em max.
  test('clamp: valores exatamente nos limites são mantidos', () => {
    expect(clamp(0, 0, 10)).toBe(0);
    expect(clamp(10, 0, 10)).toBe(10);
  });
});

describe('Mutantes mortos: conversões de temperatura (fórmula completa)', () => {
  // #160 e #161: com 0 °C, "*9*5" e "/9/5" coincidem com "*9/5" (coincidência, como fatorial(3) no material).
  test('celsiusParaFahrenheit: valores além do ponto de congelamento', () => {
    expect(celsiusParaFahrenheit(100)).toBe(212);
    expect(celsiusParaFahrenheit(-40)).toBe(-40);
    expect(celsiusParaFahrenheit(37)).toBeCloseTo(98.6);
  });
  // #163 e #164: com 32 °F o fator (F - 32) zera tudo.
  test('fahrenheitParaCelsius: valores além do ponto de congelamento', () => {
    expect(fahrenheitParaCelsius(212)).toBe(100);
    expect(fahrenheitParaCelsius(-40)).toBe(-40);
    expect(fahrenheitParaCelsius(98.6)).toBeCloseTo(37);
  });
});

describe('Mutantes mortos: medianaArray (ordenação e quantidade par)', () => {
  // #200, #202, #203: array já ordenado escondia a ausência/erro do sort.
  test('medianaArray: ordena antes de calcular (array ímpar desordenado)', () => {
    expect(medianaArray([3, 1, 2])).toBe(2);
    expect(medianaArray([9, 1, 5, 7, 3])).toBe(5);
    expect(medianaArray([10, -2, 7])).toBe(7);
  });
  // #206, #208, #209, #210, #211, #212: ramo de quantidade par nunca era executado.
  test('medianaArray: média dos dois centrais para array par', () => {
    expect(medianaArray([1, 2, 3, 4])).toBe(2.5);
    expect(medianaArray([4, 1, 3, 2])).toBe(2.5);
    expect(medianaArray([10, 20])).toBe(15);
    expect(medianaArray([8, 2, 6, 4, 10, 12])).toBe(7);
  });
  // a cópia [...numeros] impede que o sort altere o array do chamador.
  test('medianaArray: não altera o array recebido', () => {
    const entrada = [3, 1, 2];
    medianaArray(entrada);
    expect(entrada).toEqual([3, 1, 2]);
  });
});

// =====================================================================
// Entradas de borda do JavaScript. Matam mutantes que, para entradas
// "normais", são equivalentes ao original (ver relatório, seção 4).
// =====================================================================
describe('Mutantes mortos: entradas de borda (-0 e array-like)', () => {
  // #147 (valor <= min): com valor -0 e min 0 o original devolve -0 (o próprio valor)
  // e o mutante devolve min (+0). toBe usa Object.is, que diferencia -0 de +0.
  test('clamp: -0 no limite inferior é preservado', () => {
    expect(clamp(-0, 0, 10)).toBe(-0);
  });
  // #151 (valor >= max): mesmo raciocínio no limite superior.
  test('clamp: -0 no limite superior é preservado', () => {
    expect(clamp(-0, -5, 0)).toBe(-0);
  });
  // #140 (if false): o original devolve 1 antes de chamar reduce; o mutante chamaria
  // reduce num objeto que não é array e lançaria TypeError.
  test('produtoArray: objeto array-like vazio retorna 1', () => {
    expect(produtoArray({ length: 0 })).toBe(1);
  });
});
