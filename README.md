# @matech/components

Biblioteca de componentes compartilhados da Matech.

## Instalacao

```bash
npm install @matech/components
```

## Uso rapido

```tsx
import { Button } from '@matech/components';

export function Example() {
  return <Button>Novo curso</Button>;
}
```

## Documentacao

- Uso da lib: [`docs/USAGE.md`](./docs/USAGE.md)
- Manutencao e boas praticas: [`docs/MAINTAINING.md`](./docs/MAINTAINING.md)
- Publicacao da lib: [`docs/PUBLISHING.md`](./docs/PUBLISHING.md)

## GitHub

O repositório já pode usar GitHub Actions para:

- validar a lib em `push` e `pull_request`
- publicar no npm ao subir uma tag `v*.*.*`

Arquivos:

- `.github/workflows/ci.yml`
- `.github/workflows/publish.yml`

## API publica atual

Componentes:

- `Button`
- `Typography`

Helpers de tema:

- `createMatechPalette`
- `createMatechTheme`
- `createMatechThemeOptions`
- `getMatechPalette`
- `MatechThemeProvider`
- `useMatechTheme`

Paletas default:

- `matechDefaultPalette`
- `matechDefaultButtonPalette`
- `matechDefaultGlobalPalette`

Tipos:

- `ButtonProps`
- `ButtonVariant`
- `TypographyProps`
- `TypographyVariant`
- `MatechButtonPalette`
- `MatechButtonPaletteVariant`
- `MatechButtonTypography`
- `MatechGlobalPalette`
- `MatechPalette`
- `MatechPaletteOptions`
- `MatechTextVariant`
- `MatechTheme`
- `MatechThemeOptions`
- `MatechTypography`
- `MatechTypographyVariantStyle`
- `MatechTypographyOptions`

## Desenvolvimento local

Storybook:

```bash
npm run storybook
```

Se a porta `6006` ja estiver em uso:

```bash
npm run storybook -- -p 6007
```

Build:

```bash
npm run build
```

Testes:

```bash
npm test
```

Validacao antes de publicar:

```bash
npm run validate
```

Validacao completa de release:

```bash
npm run release:check
```

## Publicacao

Fluxo sugerido:

```bash
npm version patch
npm run release:check
npm publish
```

Observacoes:

- O pacote publica apenas `dist`.
- A lib depende apenas de `react` e `react-dom` como `peerDependencies`.
- Como o pacote usa `publishConfig.access = "public"`, a publicacao sai publica por padrao.
- Para publicar como `@matech/components`, a conta ou organizacao no npm precisa ter acesso ao escopo `@matech`.
