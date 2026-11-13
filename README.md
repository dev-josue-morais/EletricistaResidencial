# EletriCaldas - Site de Serviços Elétricos

Este é o site oficial do EletriCaldas, eletricista em Caldas Novas - GO.  
O site apresenta serviços elétricos residenciais e prediais, contato via WhatsApp e informações detalhadas.

## Funcionalidades

- Menu flutuante com navegação rápida
- Seção de apresentação com título, texto, imagem e botões
- Seção de serviços com cards interativos
- Depoimentos e comentários do Google integrados
- Botões para contato via WhatsApp e telefone
- Layout responsivo para celulares e desktops

## Tecnologias usadas

- HTML5
- CSS3
- JavaScript (puro)
- SVG para ícones
- Integração com Google Reviews via Elfsight

## Como visualizar

1. Abra o terminal na pasta do projeto
2. Abra `index.html` no navegador ou use uma extensão de Live Server no VSCode

## GitHub Pages

O site pode ser publicado usando GitHub Pages:

1. Vá nas **Configurações do repositório → Pages**
2. Escolha a branch `main` e a pasta `/` (raiz)
3. Clique em **Salvar** e aguarde alguns minutos
4. O site estará disponível em [Eletricista Residencial](https://dev-josue-morais.github.io/EletricistaResidencial/)

## Código-fonte e build

O código-fonte React fica em `source/` (organizado em `src/components`, `src/sections`, `src/data`, `src/config`, `src/services`, `src/hooks`, `src/utils`, `src/styles`).
Os arquivos publicados (`index.html` e `assets/*.js|css`) são gerados na raiz pelo build:

```bash
cd source
yarn install
yarn build     # gera ../index.html, ../assets/index.js, ../assets/vendor.js, ../assets/vendor-react.js, ../assets/index.css
yarn preview   # visualiza a versão publicada localmente
```

Após o build, faça commit dos arquivos gerados — o GitHub Pages continua publicando a branch `main`, pasta `/` (raiz).
