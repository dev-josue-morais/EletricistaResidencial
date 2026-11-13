# EletricistaResidencial – Refatoração estrutural
## Problema
assets/index.js (~19 mil linhas, bundle Vite compilado/formatado) sem código-fonte. Objetivo: dividir em módulos <1000 linhas, preservando 100% o comportamento, build e GitHub Pages.
## Decisões do usuário
- Reconstruir o código-fonte em módulos (source/ com Vite 4)
- Publicação em poucos arquivos JS (index.js, vendor.js, vendor-react.js)
## Implementado (2026-06)
- source/: 35 arquivos JS/JSX (maior: 88 linhas) + styles/index.css original
- vite.config.js: saída na raiz (index.html + assets/), nomes fixos, modulepreload, scripts inline do index.html preservados sem reprocessamento
- Versões das libs iguais às do bundle (React 18.3.1, framer-motion 10.18.0, lucide-react 0.285, react-helmet 6.1.0, radix toast 1.2.x, tailwind-merge 1.14)
- Teste: DOM renderizado idêntico (md5) ao original, meta/SEO idênticos, todos os botões abrem os mesmos destinos, scroll idêntico, mobile idêntico
## Backlog
- Publicar via Save to Github
