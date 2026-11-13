# Pokédex Angular

Aplicação web desenvolvida em Angular para consultar e explorar os primeiros Pokémon através da [PokéAPI](https://pokeapi.co/).

## Objetivo

Este projeto faz parte de uma atividade acadêmica de desenvolvimento de aplicações Angular. O objetivo é praticar o consumo de uma API REST utilizando `HttpClient`, Services, componentes, TypeScript e Angular Router.

## Tecnologias utilizadas

- Angular 19
- TypeScript
- HTML5
- CSS3
- HttpClient
- RxJS
- Angular Router
- PokéAPI

## Funcionalidades

- Listagem dos 20 primeiros Pokémon retornados pela API.
- Cards com imagem oficial, nome e número de identificação.
- Navegação para a página de detalhes de cada Pokémon.
- Consulta individual dos dados diretamente na PokéAPI.
- Exibição de imagem, ID, altura, peso, tipos e habilidades.
- Conversão de altura para metros e peso para quilogramas.
- Estados de carregamento e mensagens de erro.
- Layout responsivo para computadores, tablets e celulares.

## Endpoints utilizados

Listagem dos Pokémon:

```text
GET https://pokeapi.co/api/v2/pokemon?limit=20
```

Detalhes de um Pokémon:

```text
GET https://pokeapi.co/api/v2/pokemon/{id}
```

Exemplo:

```text
GET https://pokeapi.co/api/v2/pokemon/1
```

## Instalação

É necessário ter o Node.js e o npm instalados.

Clone o repositório e acesse a pasta do projeto:

```bash
git clone URL_DO_REPOSITORIO
cd pokedex-angular
```

Instale as dependências:

```bash
npm install
```

## Execução local

Inicie o servidor de desenvolvimento:

```bash
npm start
```

Ou utilize diretamente o Angular CLI:

```bash
ng serve
```

Acesse `http://localhost:4200/` no navegador.

Para gerar o build de produção:

```bash
npm run build
```

## Estrutura do projeto

```text
src/
├── app/
│   ├── models/
│   │   └── pokemon.model.ts
│   ├── pages/
│   │   ├── pokemon-list/
│   │   └── pokemon-details/
│   ├── services/
│   │   └── pokemon.service.ts
│   ├── app.config.ts
│   ├── app.routes.ts
│   └── app.component.ts
├── index.html
├── main.ts
└── styles.css
```

O arquivo `pokemon.service.ts` centraliza as requisições HTTP. A listagem utiliza a rota `/` e os detalhes utilizam `/pokemon/:id`.

## Licença e fonte dos dados

Os dados são fornecidos pela [PokéAPI](https://pokeapi.co/). Este projeto foi desenvolvido para fins acadêmicos.
