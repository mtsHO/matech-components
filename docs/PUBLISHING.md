# Publicacao da Lib

Este guia define um fluxo simples e facil de manter para publicar a `@mateusho/matech-components`.

## Objetivo

Ter um processo previsivel para:

- validar a lib antes de publicar
- garantir que `dist` e tipos estao corretos
- evitar publicar algo quebrado
- repetir o mesmo fluxo em toda release

## Pre-requisitos

Antes da primeira publicacao, confirme:

- a conta do npm tem permissao no escopo `@mateusho`
- voce esta autenticado no npm
- o nome do pacote `@mateusho/matech-components` esta correto
- o repositorio esta no GitHub

Comandos uteis:

```bash
npm whoami
npm login
```

## Estrutura recomendada no GitHub

O fluxo mais facil de manter para esta lib e:

- GitHub para codigo, PRs e CI
- npm para distribuicao do pacote
- publicacao automatica por tag de versao

Workflows criados:

- `.github/workflows/ci.yml`
- `.github/workflows/publish.yml`

## Configuracao inicial no GitHub

### 1. Criar o repositorio

Crie o repositorio no GitHub e conecte o projeto local.

Exemplo:

```bash
git remote add origin git@github.com:<org-ou-usuario>/matech-components.git
git branch -M main
git push -u origin main
```

### 2. Configurar o segredo do npm

No GitHub:

`Settings` -> `Secrets and variables` -> `Actions` -> `New repository secret`

Crie o secret:

- `NPM_TOKEN`

Esse token deve vir do npm com permissao para publicar o pacote `@mateusho/matech-components`.

### 3. Confirmar o comportamento dos workflows

- `ci.yml`: roda em `push` e `pull_request`
- `publish.yml`: roda quando voce envia uma tag no formato `v*.*.*`

## Scripts de release

A lib possui estes scripts para publicacao:

```bash
npm run validate
npm run test:coverage
npm run release:check
npm run pack:check
```

O que cada um faz:

- `npm run validate`: checa tipos dos testes, roda testes e gera o build da lib
- `npm run test:coverage`: valida a cobertura util cobrada pela lib e e o comando usado no `pre-commit`
- `npm run release:check`: roda toda a validacao de release, incluindo Storybook e empacotamento
- `npm run pack:check`: mostra o que vai entrar no pacote publicado

## Fluxo recomendado

### 1. Finalize as mudancas

Confirme que:

- os componentes novos estao exportados em `src/index.ts`
- docs e stories estao atualizadas
- o `CHANGELOG.md` foi atualizado quando a release trouxer mudancas relevantes
- testes estao passando
- `npm run test:coverage` passa localmente

### 2. Atualize a versao

Escolha o tipo da release:

- `patch`: correcao sem mudar API publica
- `minor`: novo componente, nova prop, nova variacao sem quebra
- `major`: mudanca com quebra de contrato

Comandos:

```bash
npm version patch
```

ou

```bash
npm version minor
```

ou

```bash
npm version major
```

Isso atualiza o `package.json` e cria uma tag git local.

### 3. Rode a validacao completa

```bash
npm run release:check
```

Esse deve ser o comando padrao antes de toda publicacao.

Ele valida:

- types dos testes
- testes com Vitest
- build TypeScript da lib
- build do Storybook
- conteudo final do pacote

### 4. Revise o pacote que sera publicado

```bash
npm run pack:check
```

Verifique principalmente:

- se apenas `dist` esta indo para o pacote
- se nao entrou arquivo temporario
- se os arquivos de tipos foram gerados

### 5. Publique no npm

Se voce quiser publicar manualmente, ainda pode usar:

```bash
npm publish
```

Mas o fluxo recomendado com GitHub e automatizar isso pela tag.

### 5. Publicacao automatica pelo GitHub

Depois de validar localmente, envie commit e tag:

```bash
git push origin main
git push origin --tags
```

Quando a tag `vX.Y.Z` chegar no GitHub, o workflow `publish.yml` publica a versao no npm automaticamente.

### 6. Valide a publicacao

Depois de publicar, confirme:

```bash
npm view @mateusho/matech-components version
```

Se quiser validar consumo real:

```bash
npm install @mateusho/matech-components@<versao>
```

## Fluxo enxuto para o dia a dia

Na pratica, o fluxo recomendado fica assim:

```bash
npm version patch
npm run release:check
git push origin main
git push origin --tags
```

Resultado:

- o GitHub valida a branch
- a tag dispara a publicacao no npm

## Quando usar cada tipo de versao

Exemplos para esta lib:

- `patch`: ajustar tipagem do `Button`, corrigir docs, corrigir estilo sem mudar API
- `minor`: adicionar `Typography`, adicionar novo componente, adicionar nova variante compativel
- `major`: renomear prop publica, remover export, alterar comportamento esperado com quebra

## Boas praticas para manter o processo simples

- publique sempre a partir de uma branch limpa
- rode `npm run release:check` antes de toda release
- confirme que o `pre-commit` nao esta falhando por coverage antes de versionar
- nao publique sem revisar a versao no `package.json`
- documente novos componentes antes da release
- prefira releases pequenas e frequentes
- use `main` como branch de release
- publique sempre por tag para manter rastreabilidade no GitHub

## Ordem recomendada de manutencao

Quando um novo componente entrar na lib:

1. implementar
2. documentar no Storybook
3. testar
4. exportar
5. rodar `npm run release:check`
6. publicar

## Problemas comuns

### Falha no escopo do npm

Se o `npm publish` falhar com permissao:

- confirme a conta logada com `npm whoami`
- confirme acesso ao escopo `@mateusho`

### Storybook nao sobe localmente

Use:

```bash
npm run storybook -- -p 6007
```

O script da lib ja usa polling para evitar problemas de file watcher em alguns ambientes.

### Pacote publicado sem arquivos esperados

Confira:

- `files` no `package.json`
- se `dist` foi gerado com `npm run build`
- se `npm run pack:check` mostra os arquivos corretos

## Resumo

Comando principal de seguranca antes de publicar:

```bash
npm run release:check
```

Fluxo oficial:

```bash
npm version patch
npm run release:check
git push origin main
git push origin --tags
```
