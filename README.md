# Artisain House Pokedex

Uma aplicação web moderna para explorar o mundo dos Pokémon, construída com Nuxt.js, TypeScript e Tailwind CSS.

## 🚀 Funcionalidades

- Listagem dos primeiros 30 Pokémon
- Visualização detalhada de cada Pokémon
- Interface moderna e responsiva
- Informações detalhadas incluindo:
  - Imagem do Pokémon
  - Nome
  - Número na Pokedex
  - Tipos
  - Estatísticas detalhadas

## 🛠️ Tecnologias Utilizadas

- [Nuxt.js](https://nuxt.com/) - Framework Vue.js para aplicações web
- [TypeScript](https://www.typescriptlang.org/) - Superset JavaScript com tipagem estática
- [Tailwind CSS](https://tailwindcss.com/) - Framework CSS utilitário
- [Shadcn UI](https://ui.shadcn.com/) - Componentes UI reutilizáveis
- [PokeAPI](https://pokeapi.co/) - API pública de Pokémon

## 📦 Instalação

1. Clone o repositório:
```bash
git clone https://github.com/GuiMedeirox/artisain-house-front.git
```

2. Instale as dependências:
```bash
npm install
```

3. Execute o projeto em modo de desenvolvimento:
```bash
npm run dev
```

4. Acesse a aplicação em `http://localhost:3000`

## 🏗️ Estrutura do Projeto

```
artisain-house-front/
├── components/         # Componentes Vue
│   ├── ui/           # Componentes UI do Shadcn
│   ├── Dialog.vue    # Modal de detalhes do Pokémon
│   └── Pokemon.vue   # Card de Pokémon
├── pages/            # Páginas da aplicação
├── stores/           # Gerenciamento de estado
├── assets/           # Recursos estáticos
└── public/           # Arquivos públicos
```

## 🔄 Funcionamento

A aplicação utiliza a PokeAPI para buscar informações dos Pokémon. Ao carregar a página inicial, são exibidos os primeiros 30 Pokémon em um grid de cards. Cada card mostra:
- Imagem do Pokémon
- Nome
- Número na Pokedex
- Tipos

Ao clicar em "Visualizar Pokemon", um modal é aberto com informações detalhadas do Pokémon selecionado.


