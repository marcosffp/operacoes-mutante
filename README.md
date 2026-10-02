# Calculadora Mutante: Teste de Mutação com StrykerJS

Trabalho prático de Teste de Software (Análise de Eficácia de Testes com Teste de Mutação).
Aluno: Marcos Alberto Ferreira Pinto, matrícula 854547.

A biblioteca `src/operacoes.js` tem 50 funções matemáticas. A suíte original (50 testes, um por função) tinha cobertura alta, mas deixava passar muitos defeitos. Usei o StrykerJS para medir isso e acrescentei testes até chegar a **98,12%** de mutation score, sem alterar o código de `src/` (o arquivo é idêntico ao do repositório original).

## Resultados

| Execução | Testes | Cobertura (statements / branches) | Mutation score | Mutantes vivos |
|---|---|---|---|---|
| Inicial | 50 | 85,41% / 58,82% | 73,71% | 44 + 12 sem cobertura |
| Com 75 testes | 75 | 98,95% / 97,05% | 96,71% | 7 |
| Final | 78 | 100% / 100% | **98,12%** | 4 |

Os 4 mutantes que continuam vivos estão na linha 19 de `fatorial` (`if (n === 0 || n === 1) return 1`). Eles são equivalentes ao original: para n = 0 e n = 1 o laço já devolve 1, então o `if` é redundante. Nenhum mutante foi marcado como ignorado. Pela fórmula da aula, `100 × D / (N − E)` com N = 213, E = 4 e D = 209, o resultado é 100%.

## O que foi acrescentado aos testes

28 testes novos em `test/operacoes.test.js`, cada um com um comentário dizendo quais mutantes ele mata:

- mensagens e condições das exceções (`divisao`, `raizQuadrada`, `fatorial`, `maximoArray`, `minimoArray`, `inverso`, `medianaArray`);
- valores de fronteira e respostas falsas (`isMaiorQue`, `isMenorQue`, `isEqual`, `isPar`, `isImpar`, `isDivisivel`, `isPrimo`, `clamp`);
- fórmulas que coincidiam com o mutante em 0 °C e 32 °F (`celsiusParaFahrenheit`, `fahrenheitParaCelsius`);
- ordenação e quantidade par em `medianaArray`;
- entradas de borda do JavaScript: `-0` em `clamp` e objeto `{ length: 0 }` em `produtoArray`.

## Como rodar

```bash
npm install
npm test                 # testes (Jest)
npm run coverage         # cobertura de código
npm run mutate           # teste de mutação (StrykerJS); relatório em reports/mutation/mutation.html
```

## Estrutura

- `src/operacoes.js`: código testado.
- `test/operacoes.test.js`: os 50 testes originais e os 28 acrescentados.
- `stryker.conf.json`: configuração do StrykerJS.
- `relatorio/relatorio.pdf`: relatório do trabalho. A fonte editável está em `relatorio/fonte/`.
- `evidencias/`: relatórios HTML do Stryker (`stryker-inicial.html` e `stryker-final.html`), JSON da primeira execução (os IDs citados nos testes), cobertura inicial e final (`.txt`), capturas de tela em `prints/` e `prova-equivalentes.js`, que compara o original com os 4 mutantes equivalentes.
