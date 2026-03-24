# Curso Base

> Template profissional de landing page para venda de cursos online com design Dark Luxury.

**🔗 Site ao vivo:** https://Xhina-comXis.github.io/curso-base/

## ✨ Características

- 🎨 **Design Dark Luxury** com gradientes dinâmicos
- 📱 **Totalmente Responsivo** (mobile, tablet, desktop)
- ⚡ **Otimizado para Performance** com Vite + React 19
- 🎯 **Placeholders Claros** para fácil customização
- 🖼️ **Imagens em CDN** (sem problemas de deploy)
- 🚀 **Pronto para GitHub Pages**

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

- [Getting Started](./documentation/getting-started.md) - Como começar
- [Customização](./documentation/customization.md) - Como customizar o conteúdo
- [Deploy](./documentation/deployment.md) - Como fazer deploy

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
├── docs/                         ← Build output (GitHub Pages)
├── documentation/                ← Documentação
├── package.json
└── vite.config.ts
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

Veja mais em [Customização](./documentation/customization.md).

## 🚀 Deploy

### GitHub Pages (Recomendado)

```bash
pnpm run build
git add -A
git commit -m "update: customize landing page"
git push origin main
```

Seu site estará em: `https://Xhina-comXis.github.io/curso-base/`

Veja instruções completas em [Deploy](./documentation/deployment.md).

## 📄 Licença

MIT

## 📞 Suporte

Para dúvidas, consulte a [documentação](./documentation) ou abra uma issue.

---

**Pronto para começar?** 👉 [Getting Started](./documentation/getting-started.md)
