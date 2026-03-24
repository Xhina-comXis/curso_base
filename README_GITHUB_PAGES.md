# Curso Base - Landing Page de Vendas

Template profissional de landing page para venda de cursos online com design Dark Luxury.

## 🚀 Deployment com GitHub Pages

Este projeto está configurado para fazer deploy automático no GitHub Pages.

### Pré-requisitos

- Node.js 22+
- pnpm
- Git

### Setup Local

1. **Clone o repositório:**
```bash
git clone https://github.com/Xhina-comXis/curso-base.git
cd curso-base
```

2. **Instale as dependências:**
```bash
pnpm install
```

3. **Execute o servidor de desenvolvimento:**
```bash
pnpm run dev
```

O site estará disponível em `http://localhost:5173`

### Build para Produção

```bash
pnpm run build
```

Os arquivos compilados estarão em `/dist`

### Deploy Automático com GitHub Pages

O projeto possui um workflow GitHub Actions configurado que:

1. **Detecta push na branch `main`**
2. **Instala dependências**
3. **Faz build do projeto**
4. **Faz deploy automático no GitHub Pages**

O site estará disponível em: `https://Xhina-comXis.github.io/curso-base/`

#### Configurar domínio customizado (opcional)

Se quiser usar um domínio customizado:

1. Vá para **Settings** → **Pages**
2. Em "Custom domain", adicione seu domínio
3. Configure os registros DNS do seu domínio apontando para GitHub Pages
4. Descomente a linha `cname:` no arquivo `.github/workflows/deploy.yml` e adicione seu domínio

### Estrutura do Projeto

```
curso-base/
├── client/
│   ├── src/
│   │   ├── pages/
│   │   │   └── Home.tsx          # Página principal (customize aqui!)
│   │   ├── components/           # Componentes reutilizáveis
│   │   ├── App.tsx              # Configuração de rotas
│   │   └── index.css            # Estilos globais e tema
│   ├── index.html
│   └── public/
├── dist/                         # Build output (gerado após pnpm run build)
├── package.json
└── .github/workflows/
    └── deploy.yml               # Configuração do GitHub Actions
```

### Customização

Todos os textos estão com placeholders fáceis de encontrar:

- `[TÍTULO]` - Título principal
- `[SUBTÍTULO]` - Subtítulo
- `[BENEFÍCIO 1-6]` - Benefícios do curso
- `[CARD 1-3]` - Cards de problema
- `[NOME 1-2]`, `[PROFISSÃO 1-2]` - Depoimentos
- `[PREÇO ORIGINAL]`, `[PREÇO FINAL]` - Valores
- `[BÔNUS 1-5]` - Bônus inclusos

Basta abrir `client/src/pages/Home.tsx` e substituir pelos seus dados.

### Imagens

As imagens estão hospedadas em CDN. Para usar suas próprias imagens:

1. Faça upload das imagens em um serviço como Cloudinary, Imgix ou S3
2. Substitua as URLs no arquivo `Home.tsx`

### Troubleshooting

**O site não aparece no GitHub Pages?**
- Verifique se o workflow foi executado com sucesso em **Actions**
- Confirme que a branch `main` está protegida e o workflow tem permissão

**Build falha?**
- Verifique se todas as dependências foram instaladas: `pnpm install`
- Limpe o cache: `pnpm store prune`

**Estilos não aparecem?**
- Certifique-se de que o `baseUrl` está correto no `vite.config.ts`

### Licença

MIT

### Suporte

Para dúvidas ou problemas, abra uma issue no repositório.
