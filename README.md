This is a Next.js project bootstrapped with `create-next-app`.

## Getting Started

This is a Next.js project bootstrapped with `create-next-app`.

## Getting Started

First, run the development server:

```bash
npm run dev
# or
yarn dev
# or
pnpm dev
# or
bun dev
```

Open http://localhost:3000 with your browser to see the result.

You can start editing the page by modifying `app/page.tsx`. The page auto-updates as you edit the file.

This project uses [`next/font`](https://nextjs.org/docs/app/building-your-application/optimizing/fonts) to automatically optimize and load fonts.

## Convenções de Imports e Checagens

- Usamos o alias `@/` para importar a partir da raiz do repositório. Exemplo:
  - `import Header from '@/components/layout/Header'`
- Se preferir que `@/` aponte para `src/`, atualize `tsconfig.json` para:
  - `"@/*": ["./src/*"]`

Comandos úteis:

```bash
# desenvolvimento
npm run dev

# build (inclui checagem de tipos)
npm run build

# checagem de tipos apenas
npm run typecheck

# lint
npm run lint

# format
npm run format
```

Editor:

- Após mudar `tsconfig.json`, reinicie o TypeScript Server no VS Code: Command Palette → "TypeScript: Restart TS Server".

CI:

- Há um workflow GitHub Actions em `.github/workflows/ci.yml` que roda `typecheck`, `lint` e `build` em PRs e pushes para `main`.

Coverage (Cobertura de testes)

- Para gerar relatórios de cobertura localmente, rode:

```bash
npm run test:coverage
```

- O workflow de CI também executa `test:coverage` e, se você configurar o segredo `CODECOV_TOKEN` nas Settings → Secrets → Actions, o resultado será enviado automaticamente ao Codecov.

- Para adicionar um badge ao README após configurar o Codecov, insira algo semelhante a:

```markdown
[![codecov](https://codecov.io/gh/<OWNER>/<REPO>/branch/main/graph/badge.svg?token=<TOKEN>)](https://codecov.io/gh/<OWNER>/<REPO>)
```

Substitua `<OWNER>`, `<REPO>` e `<TOKEN>` pelos valores do seu repositório/Token do Codecov.

Vercel Preview Deploy (PRs)

Este repositório inclui um workflow (`.github/workflows/vercel-preview.yml`) que aciona um deploy de preview no Vercel sempre que um Pull Request é aberto/atualizado.

Para que o workflow funcione, configure os seguintes secrets no repositório (Settings → Secrets → Actions):

- `VERCEL_TOKEN` — token de deploy (obtenha em https://vercel.com/account/tokens)
- `VERCEL_ORG_ID` — id da organização (veja em Project > Settings na Vercel)
- `VERCEL_PROJECT_ID` — id do projeto (veja em Project > Settings na Vercel)

Depois de adicionar esses secrets, o workflow executará um preview deploy automaticamente para cada PR.

