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

## API publica atual

Componentes:

- `Button`

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
- `MatechButtonPalette`
- `MatechButtonPaletteVariant`
- `MatechButtonTypography`
- `MatechGlobalPalette`
- `MatechPalette`
- `MatechPaletteOptions`
- `MatechTheme`
- `MatechThemeOptions`
- `MatechTypography`
- `MatechTypographyOptions`

## Desenvolvimento local

Storybook:

```bash
npm run storybook
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

## Publicacao

Fluxo sugerido:

```bash
npm login
npm test
npm run build
npm run pack:check
npm publish
```

Observacoes:

- O pacote publica apenas `dist`.
- A lib depende apenas de `react` e `react-dom` como `peerDependencies`.
- Como o pacote usa `publishConfig.access = "public"`, a publicacao sai publica por padrao.
- Para publicar como `@matech/components`, a conta ou organizacao no npm precisa ter acesso ao escopo `@matech`.
