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

