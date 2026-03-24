# Curso Base

> Template profissional de landing page para venda de cursos online com design Dark Luxury.

## ✨ Características

- 🎨 **Design Dark Luxury** com gradientes dinâmicos
- 📱 **Totalmente Responsivo** (mobile, tablet, desktop)
- ⚡ **Otimizado para Performance** com Vite + React 19
- 🎯 **Placeholders Claros** para fácil customização
- 🖼️ **Imagens em CDN** (sem problemas de deploy)
- 🚀 **Pronto para GitHub Pages** ou Vercel

## 🚀 Quick Start

### Pré-requisitos

- Node.js 22+
- pnpm

### Instalação

```bash
# Clone o repositório
git clone https://github.com/Xhina-comXis/curso-base.git
cd curso-base

# Instale as dependências
pnpm install

# Inicie o servidor de desenvolvimento
pnpm run dev
```

Acesse `http://localhost:5173` no seu navegador.

## 📖 Documentação

- [Setup Inicial](./docs/getting-started.md) - Como começar
- [Customização](./docs/customization.md) - Como customizar o conteúdo
- [Deploy](./docs/deployment.md) - Como fazer deploy
- [Estrutura do Projeto](./docs/project-structure.md) - Entenda a organização
- [FAQ](./docs/faq.md) - Perguntas frequentes

## 🛠️ Scripts Disponíveis

```bash
# Desenvolvimento
pnpm run dev          # Inicia servidor local

# Produção
pnpm run build        # Build para produção
pnpm run preview      # Preview do build

# Qualidade
pnpm run check        # TypeScript check
pnpm run format       # Formata código
```

## 📁 Estrutura

```
curso-base/
├── client/
│   ├── src/
│   │   ├── pages/
│   │   │   └── Home.tsx          ← Customize aqui!
│   │   ├── components/
│   │   ├── App.tsx
│   │   └── index.css
│   └── index.html
├── docs/                         ← Documentação
├── dist/                         ← Build output
└── package.json
```

## 🎨 Customização Rápida

Abra `client/src/pages/Home.tsx` e substitua:

| Placeholder | Descrição |
|---|---|
| `[TÍTULO]` | Título principal |
| `[SUBTÍTULO]` | Subtítulo |
| `[BENEFÍCIO 1-6]` | Benefícios do curso |
| `[PREÇO FINAL]` | Preço do curso |
| `[NOME 1-2]` | Nomes dos depoimentos |

Veja mais em [Customização](./docs/customization.md).

## 🚀 Deploy

### GitHub Pages (Grátis)

```bash
pnpm run build
# Faça upload de /dist/public para GitHub Pages
```

Veja instruções completas em [Deploy](./docs/deployment.md).

### Vercel (Recomendado)

1. Vá para https://vercel.com
2. Conecte seu repositório
3. Vercel faz deploy automaticamente

## 📸 Preview

![Hero Section](./docs/images/preview-hero.png)

## 🤝 Contribuindo

Encontrou um bug? Abra uma [issue](https://github.com/Xhina-comXis/curso-base/issues).

## 📄 Licença

MIT

## 📞 Suporte

Para dúvidas, consulte a [documentação](./docs) ou abra uma issue.

---

**Pronto para começar?** 👉 [Setup Inicial](./docs/getting-started.md)
