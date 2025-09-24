# Pasta de Currículos

Esta pasta contém os arquivos de currículo em diferentes idiomas.

## ⚠️ IMPORTANTE: Arquivos movidos para pasta public

Os arquivos de currículo foram movidos para a pasta `public/` para serem servidos corretamente em produção.

## Nomes dos arquivos padrão:

- `cv-pt.pdf` - Currículo em português
- `cv-en.pdf` - Currículo em inglês

## Como usar:

1. Coloque seu currículo em português na pasta `public/` com o nome `cv-pt.pdf`
2. Coloque seu currículo em inglês na pasta `public/` com o nome `cv-en.pdf`
3. Os arquivos devem estar no formato PDF
4. O sistema irá automaticamente baixar o arquivo correto baseado no idioma selecionado pelo usuário

## Estrutura esperada:

```
public/
├── cv-pt.pdf (seu currículo em português)
└── cv-en.pdf (seu currículo em inglês)
```

## Por que mover para public/?

A pasta `public/` é servida estaticamente pelo Vite e será incluída automaticamente no build de produção, garantindo que os arquivos PDF sejam acessíveis no Vercel.
