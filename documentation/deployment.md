# Deployment

Guia para publicar seu site em produção.

## 🔨 Build para Produção

Primeiro, faça o build:

```bash
pnpm run build
```

Os arquivos compilados estarão em `/docs`.

## 🚀 GitHub Pages

Seu repositório já está configurado para GitHub Pages!

### Setup

1. Vá para seu repositório
2. **Settings** → **Pages**
3. Em "Source", selecione **Deploy from a branch**
4. Escolha branch **main** e pasta **`/docs`**
5. Clique em **Save**

### Deploy

Cada vez que você faz push para `main`, o site atualiza automaticamente:

```bash
# 1. Customize o conteúdo
# 2. Faça build
pnpm run build

# 3. Faça commit e push
git add -A
git commit -m "update: customize landing page"
git push origin main
```

**URL:** `https://Xhina-comXis.github.io/curso-base/`

---

## 🚀 Vercel (Alternativa)

Mais fácil e com melhor performance.

### Setup

1. Vá para https://vercel.com
2. Clique em **New Project**
3. Selecione seu repositório
4. Vercel detecta automaticamente Vite
5. Clique em **Deploy**

**URL:** `https://curso-base.vercel.app`

---

## 🚀 Netlify

Alternativa ao Vercel.

### Setup

1. Vá para https://netlify.com
2. Clique em **Add new site** → **Import an existing project**
3. Conecte seu repositório GitHub
4. Configure:
   - **Build command:** `pnpm run build`
   - **Publish directory:** `docs`
5. Clique em **Deploy**

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

---

## 🚨 Troubleshooting

### Estilos não aparecem

Verifique o `base` em `vite.config.ts`:

```ts
base: "/",  // Deve ser "/" para GitHub Pages
```

### Build falha

```bash
# Verifique erros
pnpm run check

# Limpe cache
rm -rf docs node_modules
pnpm install
pnpm run build
```

### Site não carrega

- Aguarde 5-10 minutos após deploy
- Limpe cache do navegador (Ctrl+Shift+Delete)
- Verifique se o build foi bem-sucedido

---

**Pronto para publicar?** Escolha uma opção acima e siga os passos! 🚀
