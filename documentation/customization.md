# Customização

Guia completo para customizar o conteúdo do seu curso.

## 📝 Textos

Todos os textos estão em `client/src/pages/Home.tsx` com placeholders claros.

### Hero Section

```tsx
// Linha ~40
<h1 className="...">
  [TÍTULO <span>PRINCIPAL]</span>
</h1>

// Linha ~44
<p>Lorem ipsum dolor sit amet...</p>
```

**Substitua por:**

```tsx
<h1 className="...">
  Seu Novo Título <span>Aqui</span>
</h1>

<p>Sua descrição aqui...</p>
```

### Seção de Problemas

```tsx
// Linha ~107-112
<h2>[TÍTULO SEÇÃO 2]</h2>
<p>Lorem ipsum dolor sit amet...</p>

// Linha ~119-131 (Cards)
{
  title: "[CARD 1]",
  description: "Lorem ipsum...",
  icon: "🎯",
}
```

### Seção de Benefícios

```tsx
// Linha ~170-185
<h2>[TÍTULO SEÇÃO 3]</h2>

{[
  "[BENEFÍCIO 1]",
  "[BENEFÍCIO 2]",
  "[BENEFÍCIO 3]",
  "[BENEFÍCIO 4]",
  "[BENEFÍCIO 5]",
  "[BENEFÍCIO 6]",
]}
```

### Depoimentos

```tsx
// Linha ~216-228
{
  name: "[NOME 1]",
  role: "[PROFISSÃO 1]",
  image: "testimonial_1",
  text: "Lorem ipsum...",
  rating: 5,
}
```

### Preço

```tsx
// Linha ~258-266
<p className="...">Valor Normal: R$ [PREÇO ORIGINAL]</p>
<span className="...">R$ [PREÇO FINAL]</span>
<span className="...">/[PERÍODO]</span>
<p className="...">[DESCONTO]% de desconto</p>
```

### Bônus

```tsx
// Linha ~279-284
{[
  "[BÔNUS 1]",
  "[BÔNUS 2]",
  "[BÔNUS 3]",
  "[BÔNUS 4]",
  "[BÔNUS 5]",
]}
```

## 🖼️ Imagens

As imagens estão hospedadas em CDN. Para usar suas próprias:

### 1. Fazer Upload

Escolha um serviço:

- **Cloudinary** (fácil, grátis até 25GB)
- **Imgix** (profissional)
- **AWS S3** (escalável)

### 2. Substituir URLs

Abra `client/src/pages/Home.tsx` e encontre as imagens:

```tsx
// Hero (linha ~85)
<img src="https://d2xsxph8kpxj0f.cloudfront.net/..." />

// Substitua por:
<img src="https://seu-cdn.com/sua-imagem.jpg" />
```

## 🎨 Cores e Tema

O tema está em `client/src/index.css`:

```css
:root {
  --primary: #d4af37;              /* Ouro */
  --background: #0a1628;           /* Azul-escuro */
  --foreground: #ffffff;           /* Branco */
}
```

### Mudar Paleta de Cores

```css
:root {
  --primary: #FF6B6B;              /* Novo primário */
  --background: #1A1A2E;           /* Novo fundo */
  --foreground: #FFFFFF;
}
```

## 🔤 Tipografia

As fontes estão em `client/index.html`:

```html
<link href="https://fonts.googleapis.com/css2?family=Bebas+Neue&family=Poppins:wght@400;600;700&display=swap" rel="stylesheet" />
```

Para usar outras fontes:

1. Vá para https://fonts.google.com
2. Escolha suas fontes
3. Copie o link
4. Substitua em `client/index.html`

## ✅ Checklist de Customização

- [ ] Atualizei o título principal
- [ ] Atualizei o subtítulo
- [ ] Customizei os 3 cards
- [ ] Atualizei os 6 benefícios
- [ ] Atualizei os depoimentos
- [ ] Atualizei o preço
- [ ] Atualizei os bônus
- [ ] Substitui as imagens
- [ ] Testei localmente
- [ ] Fiz build

## 🚀 Próximos Passos

1. Faça build: `pnpm run build`
2. Teste: `pnpm run preview`
3. Faça deploy: veja [Deploy](./deployment.md)

---

**Precisa de ajuda?** Veja [FAQ](./faq.md)
