# 🚀 Setup GitHub Pages - Passo a Passo

Seu projeto está pronto para ser publicado no GitHub Pages! Siga estes passos:

## 1️⃣ Ativar GitHub Pages

1. Vá para seu repositório: https://github.com/Xhina-comXis/curso-base
2. Clique em **Settings** (Configurações)
3. No menu lateral, clique em **Pages**
4. Em "Source", selecione **Deploy from a branch**
5. Escolha a branch **main** e a pasta **/ (root)**
6. Clique em **Save**

## 2️⃣ Build e Deploy Manual

Se quiser fazer deploy manualmente:

```bash
# Instale as dependências
pnpm install

# Faça o build
pnpm run build

# Os arquivos estarão em /dist/public
```

Depois, você pode fazer upload dos arquivos de `/dist/public` para o GitHub Pages.

## 3️⃣ Deploy Automático (Recomendado)

Para fazer deploy automático a cada push:

### Opção A: Usando GitHub Actions (Recomendado)

1. Crie a pasta `.github/workflows` no seu repositório
2. Crie um arquivo `deploy.yml` dentro dela com este conteúdo:

```yaml
name: Deploy to GitHub Pages

on:
  push:
    branches:
      - main

jobs:
  build-and-deploy:
    runs-on: ubuntu-latest

    steps:
      - name: Checkout code
        uses: actions/checkout@v4

      - name: Setup Node.js
        uses: actions/setup-node@v4
        with:
          node-version: '22'
          cache: 'pnpm'

      - name: Install pnpm
        uses: pnpm/action-setup@v2
        with:
          version: 10

      - name: Install dependencies
        run: pnpm install --frozen-lockfile

      - name: Build project
        run: pnpm run build

      - name: Deploy to GitHub Pages
        uses: peaceiris/actions-gh-pages@v3
        with:
          github_token: ${{ secrets.GITHUB_TOKEN }}
          publish_dir: ./dist/public
```

3. Faça commit e push:
```bash
git add .github/workflows/deploy.yml
git commit -m "add: GitHub Pages workflow"
git push origin main
```

4. Vá para a aba **Actions** do seu repositório para acompanhar o deploy

### Opção B: Usando Vercel (Alternativa)

Se preferir usar Vercel (mais fácil):

1. Vá para https://vercel.com
2. Clique em "New Project"
3. Selecione seu repositório `curso-base`
4. Vercel detectará automaticamente que é um projeto Vite
5. Clique em "Deploy"

Seu site estará em: `https://curso-base.vercel.app`

## 📍 Acessar seu site

Após o deploy, seu site estará disponível em:

**GitHub Pages:** `https://Xhina-comXis.github.io/curso-base/`

**Vercel (se usar):** `https://curso-base.vercel.app`

## 🔧 Usando Domínio Customizado

Se tiver um domínio próprio:

### GitHub Pages:
1. Settings → Pages → Custom domain
2. Digite seu domínio (ex: `meudominio.com`)
3. Configure os registros DNS:
   - Tipo A: aponte para `185.199.108.153`
   - Tipo CNAME: aponte para `Xhina-comXis.github.io`

### Vercel:
1. Settings → Domains
2. Adicione seu domínio
3. Configure os registros DNS conforme indicado

## 📝 Customizar o Conteúdo

Antes de fazer deploy, customize:

1. Abra `client/src/pages/Home.tsx`
2. Substitua todos os placeholders:
   - `[TÍTULO]` → Seu título
   - `[SUBTÍTULO]` → Seu subtítulo
   - `[BENEFÍCIO 1-6]` → Benefícios do seu curso
   - `[PREÇO FINAL]` → Seu preço
   - etc.

3. Substitua as imagens (URLs em CDN)
4. Faça commit e push

```bash
git add -A
git commit -m "customize: update course content"
git push origin main
```

## ✅ Checklist de Deploy

- [ ] Customizei todos os textos
- [ ] Atualizei as imagens
- [ ] Testei localmente com `pnpm run dev`
- [ ] Fiz build com `pnpm run build`
- [ ] Ativei GitHub Pages nas configurações
- [ ] Fiz push para a branch `main`
- [ ] Verifiquei se o site está online

## 🆘 Troubleshooting

**O site não aparece?**
- Aguarde 5-10 minutos após o push
- Verifique a aba "Actions" para erros no build
- Limpe o cache do navegador (Ctrl+Shift+Delete)

**Estilos não aparecem?**
- Verifique se o `base` no `vite.config.ts` está correto
- Faça um novo build: `pnpm run build`

**Imagens não carregam?**
- Verifique se as URLs das imagens estão corretas
- Teste as URLs diretamente no navegador

## 📚 Recursos Úteis

- [GitHub Pages Docs](https://docs.github.com/en/pages)
- [Vite Deploy Guide](https://vitejs.dev/guide/static-deploy.html)
- [Vercel Docs](https://vercel.com/docs)

---

**Pronto para publicar?** 🎉

Faça um commit final e seu site estará online em minutos!
