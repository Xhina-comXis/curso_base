# Deployment

Guia para publicar seu site em produção.

## 🔨 Build para Produção

Primeiro, faça o build:

```bash
pnpm run build
```

Os arquivos compilados estarão em `/dist/public`.

## 🚀 Opções de Deploy

### 1. GitHub Pages (Grátis)

Hospedado diretamente no GitHub.

#### Setup

1. Vá para seu repositório
2. **Settings** → **Pages**
3. Em "Source", selecione **Deploy from a branch**
4. Escolha branch **main** e pasta **/ (root)**
5. Clique em **Save**

#### Deploy Manual

```bash
# Build
pnpm run build

# Copie os arquivos de /dist/public para o GitHub Pages
# Ou use um cliente Git
```

#### Deploy Automático com GitHub Actions

Crie `.github/workflows/deploy.yml`:

```yaml
name: Deploy

on:
  push:
    branches: [main]

jobs:
  build-and-deploy:
    runs-on: ubuntu-latest
    steps:
      - uses: actions/checkout@v4
      - uses: actions/setup-node@v4
        with:
          node-version: 22
          cache: pnpm
      - uses: pnpm/action-setup@v2
        with:
          version: 10
      - run: pnpm install
      - run: pnpm run build
      - uses: peaceiris/actions-gh-pages@v3
        with:
          github_token: ${{ secrets.GITHUB_TOKEN }}
          publish_dir: ./dist/public
```

**URL:** `https://Xhina-comXis.github.io/curso-base/`

---

### 2. Vercel (Recomendado)

Mais fácil e com melhor performance.

#### Setup

1. Vá para https://vercel.com
2. Clique em **New Project**
3. Selecione seu repositório `curso-base`
4. Vercel detecta automaticamente Vite
5. Clique em **Deploy**

Pronto! Seu site está online.

**URL:** `https://curso-base.vercel.app`

#### Deploy Manual

```bash
# Instale Vercel CLI
npm install -g vercel

# Faça deploy
vercel
```

---

### 3. Netlify

Alternativa ao Vercel.

#### Setup

1. Vá para https://netlify.com
2. Clique em **Add new site** → **Import an existing project**
3. Conecte seu repositório GitHub
4. Configure:
   - **Build command:** `pnpm run build`
   - **Publish directory:** `dist/public`
5. Clique em **Deploy**

**URL:** `https://seu-site.netlify.app`

---

### 4. Seu Próprio Servidor

Para hospedar em seu servidor.

#### Requisitos

- Servidor com Node.js 22+ (opcional)
- Acesso SSH/FTP
- Domínio configurado

#### Deploy

```bash
# 1. Build localmente
pnpm run build

# 2. Copie /dist/public para seu servidor
scp -r dist/public user@seu-servidor:/var/www/seu-site/

# 3. Pronto! Seu site está online
```

#### Com Docker

Crie `Dockerfile`:

```dockerfile
FROM node:22-alpine
WORKDIR /app
COPY package.json pnpm-lock.yaml ./
RUN npm install -g pnpm && pnpm install
COPY . .
RUN pnpm run build
EXPOSE 3000
CMD ["pnpm", "start"]
```

Build e deploy:

```bash
docker build -t curso-base .
docker run -p 3000:3000 curso-base
```

---

## 🌐 Domínio Customizado

### GitHub Pages

1. **Settings** → **Pages** → **Custom domain**
2. Digite seu domínio (ex: `meudominio.com`)
3. Configure DNS:
   - **Tipo A:** `185.199.108.153`
   - **Tipo CNAME:** `Xhina-comXis.github.io`

### Vercel

1. **Settings** → **Domains**
2. Adicione seu domínio
3. Configure DNS conforme indicado

### Netlify

1. **Site settings** → **Domain management**
2. Adicione seu domínio
3. Configure DNS

---

## 📊 Monitoramento

### Analytics

Adicione Google Analytics em `client/index.html`:

```html
<script async src="https://www.googletagmanager.com/gtag/js?id=GA_ID"></script>
<script>
  window.dataLayer = window.dataLayer || [];
  function gtag(){dataLayer.push(arguments);}
  gtag('js', new Date());
  gtag('config', 'GA_ID');
</script>
```

### Performance

Teste performance em:
- https://pagespeed.web.dev
- https://www.webpagetest.org

---

## ✅ Checklist de Deploy

- [ ] Customizei todo o conteúdo
- [ ] Testei localmente com `pnpm run dev`
- [ ] Fiz build com `pnpm run build`
- [ ] Testei o build com `pnpm run preview`
- [ ] Escolhi uma plataforma (GitHub Pages/Vercel/Netlify)
- [ ] Configurei a plataforma
- [ ] Fiz deploy
- [ ] Testei o site em produção
- [ ] Configurei domínio customizado (opcional)

---

## 🚨 Troubleshooting

### Estilos não aparecem

```bash
# Verifique o base URL em vite.config.ts
# Deve ser "/curso-base/" para GitHub Pages
# Ou "/" para Vercel/Netlify
```

### Build falha

```bash
# Verifique erros
pnpm run check

# Limpe cache
rm -rf dist node_modules
pnpm install
pnpm run build
```

### Site não carrega

- Aguarde 5-10 minutos após deploy
- Limpe cache do navegador (Ctrl+Shift+Delete)
- Verifique se o build foi bem-sucedido

---

## 📚 Recursos

- [Vite Deploy](https://vitejs.dev/guide/static-deploy.html)
- [GitHub Pages Docs](https://docs.github.com/en/pages)
- [Vercel Docs](https://vercel.com/docs)
- [Netlify Docs](https://docs.netlify.com)

---

**Pronto para publicar?** Escolha uma opção acima e siga os passos! 🚀
