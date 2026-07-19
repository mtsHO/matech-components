# Manutencao da Lib

Este guia define como evoluir a `@matech/components` com consistencia, previsibilidade e facilidade de manutencao.

## Principios

- Cada componente deve ser pequeno, focado e reutilizavel.
- A API publica deve ser simples para quem consome.
- Defaults visuais da lib devem morar na camada de tema e palette.
- Casos muito especificos do produto nao devem virar regra fixa da lib cedo demais.
- Toda mudanca relevante deve ser visivel no Storybook e protegida por teste quando fizer sentido.

## Estrutura atual

```text
src/
  Button/
    Button.docs.mdx
    Button.styles.ts
    Button.test.tsx
    Button.tsx
    Button.types.ts
    index.ts
    stories/
      Button.stories.tsx
      story-icons.tsx
      story-layout.tsx
      story-theme.ts
    viewModel/
      useButtonViewModel.ts
  theme/
    typography/
    helpers/
    palette/
    ThemeProvider.tsx
    index.ts
    theme.types.ts
  index.ts
```

## Estado da primeira versao

Para a primeira versao, a arquitetura esta em um bom ponto para crescer com seguranca porque ja temos:

- componente publico com API pequena e controlada
- pasta propria por componente
- `types` centralizados no componente
- `viewModel` para logica de composicao quando necessario
- `stories` separados da implementacao
- `docs` no Storybook
- testes de comportamento
- camada propria de tema, palette e tipografia

O ponto mais importante agora nao e mudar a arquitetura de novo, e sim repetir esse padrao com consistencia nos proximos componentes.

## Componente padrao da lib

O `Button` deve ser tratado como o componente de referencia da arquitetura da `@matech/components`.

Quando um novo componente for criado, ele deve seguir a mesma linha de organizacao do `Button`, ajustando apenas o que realmente fizer sentido para o contexto.

## Como organizar um novo componente

Cada novo componente deve ter sua propria pasta em `src`.

Estrutura recomendada:

```text
src/
  ComponentName/
    ComponentName.docs.mdx
    ComponentName.styles.ts
    ComponentName.test.tsx
    ComponentName.tsx
    ComponentName.types.ts
    index.ts
    stories/
      ComponentName.stories.tsx
    viewModel/
      useComponentNameViewModel.ts
```

Arquivos opcionais:

- `stories/*`: quando a story principal precisar de helpers de layout, icones ou tema de exemplo
- `viewModel/*`: quando o componente tiver logica de composicao, estado visual, mapeamento de props ou preparacao de dados para render

Se o componente for muito simples, nao precisamos forcar complexidade.
Exemplo:

- sem `viewModel` se a renderizacao for direta
- sem arquivos auxiliares em `stories/` se a story principal estiver limpa sozinha

Responsabilidade de cada arquivo:

- `ComponentName.tsx`: camada de renderizacao do componente
- `ComponentName.styles.ts`: regras de estilo e helpers visuais
- `ComponentName.types.ts`: tipos do componente, do `viewModel` e dos helpers internos ligados a ele
- `ComponentName.docs.mdx`: documentacao guiada do componente
- `ComponentName.test.tsx`: testes com Vitest e Testing Library
- `stories/ComponentName.stories.tsx`: cenarios de uso no Storybook
- `viewModel/useComponentNameViewModel.ts`: composicao de estado, tema, estilos e handlers quando isso melhorar clareza
- `index.ts`: ponto local de exportacao do componente

## Padrao do Button

Hoje o `Button` esta organizado assim:

```text
src/
  Button/
    Button.docs.mdx
    Button.styles.ts
    Button.test.tsx
    Button.tsx
    Button.types.ts
    index.ts
    stories/
      Button.stories.tsx
      story-icons.tsx
      story-layout.tsx
      story-theme.ts
    viewModel/
      useButtonViewModel.ts
```

Leitura da arquitetura:

- `Button.tsx`: arquivo enxuto, focado em renderizar
- `Button.types.ts`: contrato central do componente
- `Button.styles.ts`: regras visuais puras
- `viewModel/useButtonViewModel.ts`: resolve tema, estilos e handlers antes da renderizacao
- `stories/`: mantem os cenarios de Storybook organizados por contexto
- `Button.docs.mdx`: documenta uso real e customizacao
- `Button.test.tsx`: garante comportamento essencial

Esse deve ser o modelo base para os proximos componentes.

## Regra de exportacao

Use dois niveis de exportacao:

- `src/ComponentName/index.ts`: organiza a pasta do componente
- `src/index.ts`: controla a API publica da lib

Isso ajuda a:

- manter imports internos organizados
- facilitar futuras mudancas de arquivos sem quebrar consumo externo
- deixar claro o que e publico e o que continua interno

## Como adicionar um novo componente

Checklist:

1. Criar a pasta do componente em `src/`.
2. Criar `ComponentName.tsx`, `ComponentName.styles.ts`, `ComponentName.types.ts` e `index.ts`.
3. Decidir se o componente precisa de `viewModel/`.
4. Criar `stories/ComponentName.stories.tsx`.
5. Separar helpers de story quando o arquivo principal comecar a ficar poluido.
6. Criar `ComponentName.docs.mdx` explicando uso e customizacao.
7. Criar `ComponentName.test.tsx` com comportamento essencial.
8. Exportar em `src/ComponentName/index.ts`.
9. Exportar em `src/index.ts`.
10. Se o componente tiver tokens visuais proprios, adicionar palette default em `src/theme/palette/components/`.
11. Atualizar `src/theme/theme.types.ts` para permitir override tipado.
12. Atualizar `docs/USAGE.md` se o componente entrar como parte importante da API.

## Boas praticas de API

- Prefira props com nomes claros e previsiveis.
- Evite props demais no primeiro momento.
- Nao adicione variantes de negocio muito especificas sem recorrencia real.
- Prefira se apoiar em APIs nativas do React e do DOM quando isso for suficiente.
- So exponha no `src/index.ts` o que realmente faz parte do contrato publico.
- Se um comportamento nao estiver realmente suportado, nao deixe a prop escapar parcialmente.
- Componentes baseados em elementos interativos devem encaminhar `ref`.
- O componente de render nao deve concentrar logica demais; quando comecar a ficar poluido, mova para `viewModel/`.

## Boas praticas de estilo

- Coloque defaults visuais da lib na camada de palette.
- Evite cores hardcoded direto no componente quando elas representam design tokens.
- Use `style` ou props nativas do consumidor apenas para excecoes pontuais.
- Mantenha o componente desacoplado de regras de tela.
- Tente manter `styles` como funcoes puras, sem estado e sem conhecimento de render.

## Boas praticas de palette e tema

Hoje a lib usa:

- `global`: tokens gerais
- `components.button`: tokens do `Button`

Ao criar um novo componente com tokens proprios:

1. Criar o arquivo de palette default do componente.
2. Fazer os defaults do componente nascerem dos tokens globais sempre que fizer sentido.
3. Incluir o componente em `matechDefaultPalette`.
4. Tipar os overrides em `MatechPaletteOptions`.
5. Atualizar `createMatechPalette` para fazer merge dos defaults com overrides.
6. Consumir a palette final no componente via `getMatechPalette(theme)`.
7. Preferir `createMatechThemeOptions` quando quiser deixar a palette resolvida no tema desde a criacao.

Regra importante:

- O default da lib mora na lib.
- O override mora no tema do projeto consumidor.

## Boas praticas de Storybook

Cada componente deve ter:

- historias dos estados principais
- casos com e sem icone, quando aplicavel
- caso de showcase realista
- doc MDX explicando quando usar cada variante
- exemplo de customizacao por tema, se o componente suportar palette propria
- pasta `stories/` quando existir mais de um contexto auxiliar para manter

Quando separar a pasta `stories/`:

- quando houver icones proprios de exemplo
- quando houver layout auxiliar so para showcase
- quando houver tema de exemplo so para demonstracao
- quando o arquivo `*.stories.tsx` comecar a misturar demais cenarios e infraestrutura

Objetivo do Storybook:

- validar visualmente antes de publicar
- servir como documentacao viva
- facilitar revisao de API e comportamento

## Boas praticas de testes

Priorize testes para:

- renderizacao basica
- variacoes principais
- interacoes importantes
- respeito a overrides de tema
- contrato publico do componente, nao detalhes cosmeticos internos

Evite testes muito acoplados a detalhes internos de implementacao.

## Fluxo recomendado para evoluir a lib

1. Implementar o componente.
2. Validar visualmente no Storybook.
3. Adicionar testes.
4. Revisar se a API esta simples.
5. Confirmar se o componente precisa mesmo de tokens proprios.
6. Exportar apenas o necessario.
7. Rodar build e testes antes de publicar.

## Comandos do dia a dia

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

Empacotamento de validacao:

```bash
npm run pack:check
```

## Criterios para publicar

Antes de publicar, verifique:

- build passando
- testes passando
- stories principais criadas
- doc do componente escrita
- exportacoes revisadas
- nome das props claro
- palette coerente com a arquitetura da lib

## O que evitar

- colocar regra de negocio de uma tela dentro da lib
- criar variantes demais cedo
- expor arquivos internos diretamente ao consumidor
- duplicar tokens visuais em varios lugares
- misturar documentacao de consumo com guia interno de manutencao

## Decisao pratica para esta lib

Separacao recomendada:

- `README.md`: entrada rapida
- `docs/USAGE.md`: consumo da lib
- `docs/MAINTAINING.md`: manutencao e evolucao da lib
- `*.docs.mdx`: documentacao especifica de cada componente no Storybook

Padrao oficial desta primeira versao:

- usar o `Button` como referencia estrutural
- repetir a mesma arquitetura nos proximos componentes
- evitar inventar novas organizacoes por componente sem necessidade real
