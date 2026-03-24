# FAQ

Perguntas frequentes e respostas.

## 🚀 Deployment

### P: Como faço deploy no GitHub Pages?

R: Siga estes passos:

1. Vá para **Settings** → **Pages**
2. Selecione **Deploy from a branch**
3. Escolha branch **main** e pasta **/ (root)**
4. Clique em **Save**

Seu site estará em: `https://Xhina-comXis.github.io/curso-base/`

### P: Qual é a melhor plataforma para deploy?

R: Recomendamos **Vercel** por ser:
- Mais fácil de usar
- Melhor performance
- Deploy automático
- Grátis

Veja [Deployment](./deployment.md) para mais opções.

### P: Posso usar um domínio customizado?

R: Sim! Veja instruções em [Deployment](./deployment.md) → "Domínio Customizado".

---

## 🎨 Customização

### P: Como mudo o título principal?

R: Abra `client/src/pages/Home.tsx` na linha ~40 e substitua:

```tsx
// Antes
<h1>[TÍTULO PRINCIPAL]</h1>

// Depois
<h1>Seu Novo Título</h1>
```

### P: Como mudo as cores?

R: Edite `client/src/index.css`:

```css
:root {
  --primary: #d4af37;        /* Mude aqui */
  --background: #0a1628;
  /* ... */
}
```

### P: Como substituo as imagens?

R: Abra `client/src/pages/Home.tsx` e procure por:

```tsx
<img src="https://d2xsxph8kpxj0f.cloudfront.net/..." />
```

Substitua pela URL da sua imagem:

```tsx
<img src="https://seu-cdn.com/sua-imagem.jpg" />
```

### P: Como adiciono novas seções?

R: Copie uma seção existente em `Home.tsx` e customize:

```tsx
{/* Nova Seção */}
<section className="py-20 px-4">
  <div className="max-w-4xl mx-auto">
    {/* Seu conteúdo aqui */}
  </div>
</section>
```

### P: Como mudo a fonte?

R: 

1. Vá para https://fonts.google.com
2. Escolha suas fontes
3. Copie o link `<link>`
4. Cole em `client/index.html`
5. Atualize `client/src/index.css`:

```css
body {
  font-family: 'Sua Fonte', sans-serif;
}
```

---

## 🛠️ Desenvolvimento

### P: Como inicio o servidor local?

R: Execute:

```bash
pnpm install
pnpm run dev
```

Abra `http://localhost:5173`

### P: Como faço build?

R: Execute:

```bash
pnpm run build
```

Os arquivos estarão em `/dist/public`.

### P: Como testo o build localmente?

R: Execute:

```bash
pnpm run build
pnpm run preview
```

### P: Qual é a porta padrão?

R: **5173** (Vite padrão)

Para usar outra:

```bash
pnpm run dev -- --port 3000
```

### P: Como vejo erros de tipo?

R: Execute:

```bash
pnpm run check
```

---

## 📦 Dependências

### P: Como instalo uma nova dependência?

R: Use pnpm:

```bash
pnpm add nome-do-pacote
```

### P: Como removo uma dependência?

R: Use:

```bash
pnpm remove nome-do-pacote
```

### P: Como atualizo as dependências?

R: Use:

```bash
pnpm update
```

---

## 🐛 Troubleshooting

### P: Porta já está em uso

R: Use outra porta:

```bash
pnpm run dev -- --port 3000
```

### P: Erro ao instalar dependências

R: Limpe o cache:

```bash
pnpm store prune
pnpm install
```

### P: Build falha

R: Verifique erros:

```bash
pnpm run check
```

Se persistir, limpe tudo:

```bash
rm -rf dist node_modules
pnpm install
pnpm run build
```

### P: Estilos não aparecem

R: Verifique o `base` em `vite.config.ts`:

```ts
base: process.env.NODE_ENV === "production" ? "/curso-base/" : "/",
```

Para GitHub Pages: `/curso-base/`
Para Vercel/Netlify: `/`

### P: Imagens não carregam

R: Verifique:
1. A URL da imagem está correta?
2. O servidor de CDN está online?
3. A imagem existe?

### P: Site não aparece após deploy

R: Aguarde 5-10 minutos. Se persistir:
1. Limpe cache do navegador (Ctrl+Shift+Delete)
2. Verifique se o build foi bem-sucedido
3. Verifique as configurações de deploy

---

## 🎓 Aprendizado

### P: Como aprendo Tailwind CSS?

R: Veja https://tailwindcss.com/docs

### P: Como aprendo React?

R: Veja https://react.dev

### P: Como aprendo TypeScript?

R: Veja https://www.typescriptlang.org/docs

### P: Como aprendo Vite?

R: Veja https://vitejs.dev/guide

---

## 💰 Preços

### P: Quanto custa usar este template?

R: **Grátis!** É open source com licença MIT.

### P: Posso usar em projetos comerciais?

R: Sim! Veja a licença MIT.

### P: Preciso dar crédito?

R: Não é obrigatório, mas é apreciado.

---

## 📞 Suporte

### P: Encontrei um bug, o que faço?

R: Abra uma [issue](https://github.com/Xhina-comXis/curso-base/issues) no GitHub.

### P: Tenho uma sugestão de melhoria

R: Abra uma [issue](https://github.com/Xhina-comXis/curso-base/issues) ou um [pull request](https://github.com/Xhina-comXis/curso-base/pulls).

### P: Posso contribuir?

R: Sim! Faça um fork, crie uma branch, e envie um pull request.

---

## 📚 Documentação

- [Getting Started](./getting-started.md)
- [Customização](./customization.md)
- [Deployment](./deployment.md)
- [Estrutura do Projeto](./project-structure.md)

---

**Sua dúvida não está aqui?** Abra uma issue! 👉 https://github.com/Xhina-comXis/curso-base/issues
