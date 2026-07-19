# Uso da Lib

Este guia mostra como consumir a `@mateusho/matech-components` em um projeto React, sem depender de MUI ou outra biblioteca de UI.

## Instalacao

```bash
npm install @mateusho/matech-components
```

Peer dependencies esperadas no projeto consumidor:

- `react`
- `react-dom`

## Importacao

```tsx
import { Button } from '@mateusho/matech-components';
```

## Primeiro uso

```tsx
import { Button } from '@mateusho/matech-components';

export function Example() {
  return <Button>Novo curso</Button>;
}
```

## Button

O `Button` suporta:

- `variant="primary"`
- `variant="secondary"`
- `variant="tertiary"`
- `size="small" | "medium" | "large"`
- `icon` opcional

Exemplos:

```tsx
function PlusIcon() {
  return (
    <svg aria-hidden="true" viewBox="0 0 24 24" width="18" height="18">
      <path d="M11 5h2v14h-2z" />
      <path d="M5 11h14v2H5z" />
    </svg>
  );
}

<Button>Novo curso</Button>
<Button variant="secondary">Retomar curso</Button>
<Button variant="tertiary">Responder</Button>
<Button icon={<PlusIcon />}>Novo evento</Button>
```

Quando usar cada variante:

- `primary`: acao principal da tela
- `secondary`: acao secundaria com contorno
- `tertiary`: acao leve, contextual, com fundo transparente

## Typography

O `Typography` centraliza titulos, subtitulos e paragrafos.

Variantes disponiveis:

- `h1` a `h6`
- `subtitle1`
- `subtitle2`
- `body1`
- `body2`
- `caption`
- `overline`
- `lead`

Exemplos:

```tsx
<Typography variant="h3">Feed da comunidade</Typography>
<Typography variant="subtitle1">Leia o feed, comente ou publique algo.</Typography>
<Typography color="muted" variant="body1">
  Veja o que esta acontecendo na comunidade e participe das conversas.
</Typography>
<Typography color="muted" variant="caption">
  Exibindo 1 de 1 publicacoes.
</Typography>
```

## Personalizacao por tema

A lib possui uma palette default interna. O projeto consumidor pode sobrescrever apenas o que precisar usando o `MatechThemeProvider`.

### Estrutura de override

```tsx
{
  global: {
    brand: '#4338CA',
    brandStrong: '#312E81',
    brandForeground: '#FFFFFF',
    surface: '#FFFFFF',
    surfaceMuted: '#F8FAFC',
    border: '#CBD5E1',
    borderStrong: '#94A3B8',
    text: '#0F172A',
    textMuted: '#475569',
  },
  components: {
    button: {
      primary: {
        background: '#4338CA',
        border: '#4338CA',
        foreground: '#FFFFFF',
        hoverBackground: '#312E81',
        hoverBorder: '#312E81',
        disabledBackground: '#C7D2FE',
        disabledBorder: '#C7D2FE',
        disabledForeground: '#4338CA',
      },
    },
  },
}
```

### Opcao 1: `createMatechTheme`

```tsx
import {
  Button,
  createMatechTheme,
  MatechThemeProvider,
} from '@mateusho/matech-components';

const theme = createMatechTheme({
  global: {
    brand: '#0F766E',
    brandStrong: '#115E59',
    brandForeground: '#F3FFFD',
    surface: '#FFFFFF',
    surfaceMuted: '#F0FDFA',
    border: '#99F6E4',
    borderStrong: '#5EEAD4',
    text: '#115E59',
    textMuted: '#6B7280',
  },
  typography: {
    fontFamily: '"Lato", "Segoe UI", sans-serif',
    button: {
      fontWeight: 900,
      letterSpacing: '0.04em',
      textTransform: 'uppercase',
    },
    variants: {
      h3: {
        fontSize: '1.75rem',
        fontWeight: 800,
        letterSpacing: '-0.02em',
      },
      body1: {
        lineHeight: 1.7,
      },
    },
  },
});

export function Example() {
  return (
    <MatechThemeProvider theme={theme}>
      <Button>Novo curso</Button>
    </MatechThemeProvider>
  );
}
```

### Opcao 2: `createMatechThemeOptions`

Use esse helper quando fizer sentido separar o objeto de configuracao antes de montar o tema final.

```tsx
import {
  Button,
  createMatechTheme,
  createMatechThemeOptions,
  MatechThemeProvider,
} from '@mateusho/matech-components';

const themeOptions = createMatechThemeOptions({
  components: {
    button: {
      tertiary: {
        foreground: '#115E59',
        hoverBackground: 'rgba(15, 118, 110, 0.08)',
      },
    },
  },
});

const theme = createMatechTheme(themeOptions);
```

### Tipografia

Voce tambem pode configurar a tipografia da lib no tema.
Isso e util para manter o visual do botao igual ao design original.

```tsx
import {
  Button,
  createMatechTheme,
  MatechThemeProvider,
} from '@mateusho/matech-components';

const theme = createMatechTheme({
  typography: {
    fontFamily: '"Lato", "Segoe UI", sans-serif',
    button: {
      fontFamily: '"Lato", "Segoe UI", sans-serif',
      fontWeight: 900,
      letterSpacing: '0.04em',
      textTransform: 'uppercase',
    },
  },
});
```

### Ler a palette final

Se o projeto precisar ler a configuracao final da lib ja com defaults + overrides aplicados:

```tsx
import { getMatechPalette } from '@mateusho/matech-components';

const palette = getMatechPalette(theme);
```

### Quando usar tema e quando usar `style`

- Use o tema quando a regra deve virar padrao do produto ou do MFE.
- Use `style` quando a tela precisa de um ajuste pontual.

Exemplo:

```tsx
function TrashIcon() {
  return (
    <svg aria-hidden="true" viewBox="0 0 24 24" width="18" height="18">
      <path d="M7 21c-.55 0-1-.45-1-1V7h12v13c0 .55-.45 1-1 1zm3-4h2V9h-2zm4 0h2V9h-2zM15 4l-1-1h-4L9 4H4v2h16V4z" />
    </svg>
  );
}

<Button
  variant="tertiary"
  icon={<TrashIcon />}
  style={{ color: '#FF4D3D' }}
>
  Remover
</Button>
```

## Storybook local

Para visualizar os componentes antes de publicar:

```bash
npm run storybook
```

Endereco local:

- `http://localhost:6006`

Se a porta `6006` estiver ocupada:

```bash
npm run storybook -- -p 6007
```

## Fluxo recomendado no projeto consumidor

1. Instale a lib.
2. Use os componentes com a palette default.
3. Mova ajustes recorrentes para o tema do projeto.
4. Deixe customizacoes pontuais na tela usando `style`.

## Referencias

- Guia de manutencao: [`./MAINTAINING.md`](./MAINTAINING.md)
- Docs do `Button` no Storybook: `src/components/Button/Button.docs.mdx`
- Docs do `Typography` no Storybook: `src/components/Typography/Typography.docs.mdx`
