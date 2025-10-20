<!-- Use este template ao abrir um PR -->

## Título sugerido

feat(tests): add Header tests, coverage and snapshots

## Descrição

Breve resumo do que este PR adiciona/modifica.

## Checklist (marque antes de solicitar revisão)
- [ ] Rodar `npm run test` (todos os testes devem passar)
- [ ] Rodar `npm run lint` (não deve haver erros novos)
- [ ] Rodar `npm run typecheck` (sem erros de tipos)
- [ ] Rodar `npm run test:coverage` e verificar `coverage/lcov.info`
- [ ] Atualizar README ou docs se necessário

## Como testar

Instruções rápidas para revisar localmente:

1. git fetch && git checkout $BRANCH
2. npm ci
3. npm run test
4. npm run test:coverage

## Notas para o revisor

- Este PR adiciona testes para o componente `Header` e configura a geração de cobertura com Vitest.
- O workflow de CI foi atualizado para executar `test:coverage`.
- Para upload automático ao Codecov, configure o secret `CODECOV_TOKEN` no repositório.
