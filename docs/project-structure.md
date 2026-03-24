# Estrutura do Projeto

Entenda como o projeto está organizado.

## 📁 Árvore de Pastas

```
curso-base/
├── client/                          # Frontend React
│   ├── src/
│   │   ├── pages/
│   │   │   ├── Home.tsx            # ← CUSTOMIZE AQUI
│   │   │   └── NotFound.tsx
│   │   ├── components/
│   │   │   ├── ui/                 # shadcn/ui components
│   │   │   ├── ErrorBoundary.tsx
│   │   │   └── Map.tsx
│   │   ├── contexts/
│   │   │   └── ThemeContext.tsx
│   │   ├── hooks/
│   │   │   └── useTheme.ts
│   │   ├── lib/
│   │   │   └── utils.ts
│   │   ├── App.tsx                 # Rotas e layout
│   │   ├── main.tsx                # Entry point
│   │   └── index.css               # Estilos globais
│   ├── index.html                  # HTML template
│   └── public/                      # Arquivos estáticos
│
├── server/                          # Backend (placeholder)
│   └── index.ts
│
├── shared/                          # Código compartilhado
│   └── const.ts
│
├── docs/                            # 📚 Documentação
│   ├── getting-started.md
│   ├── customization.md
│   ├── deployment.md
│   ├── project-structure.md
│   └── faq.md
│
├── dist/                            # Build output (gerado)
│   └── public/
│
├── .github/
│   └── workflows/                   # GitHub Actions (opcional)
│
├── .manus-logs/                     # Logs de desenvolvimento
├── node_modules/                    # Dependências
├── .gitignore
├── .prettierrc
├── package.json
├── pnpm-lock.yaml
├── tsconfig.json
├── vite.config.ts                   # Configuração Vite
├── tailwind.config.ts               # Configuração Tailwind
├── components.json                  # shadcn/ui config
├── README.md                        # Este arquivo
└── GITHUB_PAGES_SETUP.md           # Setup GitHub Pages
```

## 📄 Arquivos Importantes

### `client/src/pages/Home.tsx`

**Arquivo principal** - Aqui está toda a landing page.

Contém:
- Hero section
- Seção de problemas
- Seção de benefícios
- Depoimentos
- Pricing
- CTA final
- Footer

**O que customizar:**
- Textos (placeholders em `[COLCHETES]`)
- Imagens (URLs em CDN)
- Cores (via CSS)

### `client/src/App.tsx`

Define as rotas da aplicação:

```tsx
<Route path="/" component={Home} />
<Route path="/404" component={NotFound} />
```

Para adicionar novas páginas:

```tsx
import MinhaPage from "./pages/MinhaPage";

<Route path="/minha-page" component={MinhaPage} />
```

### `client/src/index.css`

Estilos globais e tema:

```css
:root {
  --primary: #d4af37;              /* Cor primária */
  --background: #0a1628;           /* Fundo */
  --foreground: #ffffff;           /* Texto */
  /* ... mais cores ... */
}
```

Para mudar o tema, edite os valores aqui.

### `client/index.html`

Template HTML principal:

```html
<!doctype html>
<html lang="pt-BR">
  <head>
    <!-- Fontes Google -->
    <link href="https://fonts.googleapis.com/css2?family=..." />
    <!-- Analytics -->
    <script src="..."></script>
  </head>
  <body>
    <div id="root"></div>
    <script type="module" src="/src/main.tsx"></script>
  </body>
</html>
```

### `vite.config.ts`

Configuração do Vite:

```ts
export default defineConfig({
  base: process.env.NODE_ENV === "production" ? "/curso-base/" : "/",
  plugins: [...],
  resolve: {
    alias: {
      "@": path.resolve(__dirname, "client", "src"),
    },
  },
  build: {
    outDir: path.resolve(__dirname, "dist/public"),
  },
});
```

**Importante:** O `base` deve ser:
- `/curso-base/` para GitHub Pages
- `/` para Vercel/Netlify

### `package.json`

Define dependências e scripts:

```json
{
  "scripts": {
    "dev": "vite --host",
    "build": "vite build",
    "preview": "vite preview --host",
    "check": "tsc --noEmit",
    "format": "prettier --write ."
  },
  "dependencies": {
    "react": "^19.2.1",
    "react-dom": "^19.2.1",
    "tailwindcss": "^4.1.14",
    /* ... mais dependências ... */
  }
}
```

## 🎨 Componentes Disponíveis

O projeto usa **shadcn/ui** com componentes pré-instalados:

```tsx
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Dialog } from "@/components/ui/dialog";
// ... mais componentes
```

Veja todos em `client/src/components/ui/`.

## 🔄 Fluxo de Dados

```
App.tsx (Rotas)
  ↓
Home.tsx (Página principal)
  ↓
Componentes (Button, Card, etc)
  ↓
Estilos (index.css + Tailwind)
```

## 📦 Dependências Principais

| Pacote | Uso |
|--------|-----|
| **React 19** | Framework UI |
| **Vite** | Build tool |
| **Tailwind CSS 4** | Estilos |
| **shadcn/ui** | Componentes |
| **TypeScript** | Tipagem |
| **Wouter** | Roteamento |
| **Framer Motion** | Animações |

## 🚀 Build Process

```
Código-fonte (TypeScript + JSX)
  ↓
Vite (Transpila e otimiza)
  ↓
Tailwind (Processa CSS)
  ↓
Output (HTML + CSS + JS)
  ↓
/dist/public (Pronto para deploy)
```

## 📝 Convenções

### Nomes de Arquivos

- **Componentes:** PascalCase (`Button.tsx`, `Home.tsx`)
- **Utilitários:** camelCase (`utils.ts`, `helpers.ts`)
- **Estilos:** snake_case (`index.css`, `global.css`)

### Importações

Use aliases para importações limpas:

```tsx
// ✅ Bom
import { Button } from "@/components/ui/button";
import { utils } from "@/lib/utils";

// ❌ Evite
import { Button } from "../../../components/ui/button";
import { utils } from "../../../lib/utils";
```

## 🔧 Extensões Recomendadas

Se usar VS Code:

- **ES7+ React/Redux/React-Native snippets**
- **Tailwind CSS IntelliSense**
- **Prettier - Code formatter**
- **TypeScript Vue Plugin**

## 📚 Próximos Passos

1. [Customize o conteúdo](./customization.md)
2. [Faça deploy](./deployment.md)
3. [Veja FAQ](./faq.md)

---

**Dúvidas sobre a estrutura?** Abra uma issue no repositório.
