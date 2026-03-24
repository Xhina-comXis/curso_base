# Getting Started

Comece a usar o Curso Base em 5 minutos.

## Pré-requisitos

- **Node.js** 22 ou superior
- **pnpm** (gerenciador de pacotes)

### Instalar pnpm

```bash
npm install -g pnpm
```

## 1. Clone o Repositório

```bash
git clone https://github.com/Xhina-comXis/curso-base.git
cd curso-base
```

## 2. Instale as Dependências

```bash
pnpm install
```

## 3. Inicie o Servidor Local

```bash
pnpm run dev
```

Abra seu navegador em `http://localhost:5173`

## 4. Customize o Conteúdo

Abra `client/src/pages/Home.tsx` e substitua os placeholders:

```tsx
// Antes
<h1>[TÍTULO PRINCIPAL]</h1>

// Depois
<h1>Domine a Arte de Vender Online</h1>
```

## 5. Faça Build

```bash
pnpm run build
```

Os arquivos compilados estarão em `/docs`.

## 6. Deploy

Escolha uma opção:

- **GitHub Pages** - Grátis, hospedado no GitHub
- **Vercel** - Grátis, mais fácil de usar
- **Seu servidor** - Qualquer servidor web

Veja instruções em [Deploy](./deployment.md).

## 📁 Estrutura de Pastas

```
curso-base/
├── client/                    # Frontend React
│   ├── src/
│   │   ├── pages/
│   │   │   └── Home.tsx      ← CUSTOMIZE AQUI!
│   │   ├── components/
│   │   ├── App.tsx
│   │   └── index.css
│   └── index.html
├── docs/                      # Build output (GitHub Pages)
├── documentation/             # Documentação
├── package.json
└── vite.config.ts
```

## ⚡ Comandos Úteis

```bash
# Desenvolvimento
pnpm run dev              # Inicia servidor com hot reload

# Produção
pnpm run build            # Build otimizado
pnpm run preview          # Preview do build

# Qualidade
pnpm run check            # Verifica tipos TypeScript
pnpm run format           # Formata código automaticamente
```

## 🚨 Troubleshooting

### Porta 5173 já está em uso

```bash
# Use outra porta
pnpm run dev -- --port 3000
```

### Erro ao instalar dependências

```bash
# Limpe o cache
pnpm store prune

# Reinstale
pnpm install
```

### Build falha

```bash
# Verifique erros de tipo
pnpm run check

# Limpe e reconstrua
rm -rf docs node_modules
pnpm install
pnpm run build
```

## 📚 Próximos Passos

1. [Customize o conteúdo](./customization.md)
2. [Faça deploy](./deployment.md)
3. [Entenda a estrutura](./project-structure.md)

---

**Dúvidas?** Veja [FAQ](./faq.md)
