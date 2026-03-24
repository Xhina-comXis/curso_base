import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { CheckCircle2, Play, Star, Users } from "lucide-react";
import { useState } from "react";

/**
 * Design: Dark Luxury com Gradientes Dinâmicos
 * - Fundo gradiente escuro (azul-escuro → roxo-escuro)
 * - Acentos em ouro (#d4af37) e cores vibrantes
 * - Tipografia ousada: Bebas Neue para títulos, Poppins para subtítulos
 * - Animações sutis com fade-in e efeitos de glow
 */

export default function Home() {
  const [videoPlaying, setVideoPlaying] = useState(false);

  return (
    <div className="min-h-screen bg-gradient-to-br from-[#0a1628] via-[#1a1f3a] to-[#2d1b4e] overflow-hidden">
      {/* Partículas decorativas de fundo */}
      <div className="fixed inset-0 pointer-events-none">
        <div className="absolute top-20 left-10 w-72 h-72 bg-[#d4af37] rounded-full mix-blend-screen filter blur-3xl opacity-5 animate-pulse"></div>
        <div className="absolute bottom-20 right-10 w-72 h-72 bg-[#00d4ff] rounded-full mix-blend-screen filter blur-3xl opacity-5 animate-pulse" style={{ animationDelay: "2s" }}></div>
      </div>

      {/* Conteúdo Principal */}
      <div className="relative z-10">
        {/* Hero Section */}
        <section className="min-h-screen flex items-center justify-center px-4 py-20">
          <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-12 items-center">
            {/* Texto Hero */}
            <div className="space-y-8 animate-fade-in">
              <div className="space-y-4">
                <div className="inline-block px-4 py-2 bg-[#d4af37]/10 border border-[#d4af37]/30 rounded-full">
                  <span className="text-[#d4af37] text-sm font-semibold uppercase tracking-wider">
                    Modelo Base de Curso Online
                  </span>
                </div>

                <h1 className="text-5xl md:text-7xl font-black text-white leading-tight">
                  Transforme Seu <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#d4af37] to-[#00ff88]">Conhecimento</span> em Vendas
                </h1>

                <p className="text-xl text-gray-300 leading-relaxed max-w-xl">
                  Este é um template profissional de landing page para venda de cursos online. Customize com seu nome, tema e imagens para começar a vender.
                </p>
              </div>

              {/* CTA Buttons */}
              <div className="flex flex-col sm:flex-row gap-4 pt-4">
                <Button
                  size="lg"
                  className="bg-[#d4af37] hover:bg-[#e6c547] text-[#0a1628] font-bold text-lg px-8 py-6 rounded-lg shadow-lg shadow-[#d4af37]/50 transition-all duration-300 hover:shadow-[#d4af37]/70 hover:scale-105"
                >
                  <Play className="mr-2 h-5 w-5" />
                  Começar Agora
                </Button>

                <Button
                  size="lg"
                  variant="outline"
                  className="border-[#d4af37] text-[#d4af37] hover:bg-[#d4af37]/10 font-bold text-lg px-8 py-6"
                >
                  Saber Mais
                </Button>
              </div>

              {/* Trust Indicators */}
              <div className="flex items-center gap-6 pt-4 text-sm text-gray-400">
                <div className="flex items-center gap-2">
                  <Users className="h-5 w-5 text-[#00ff88]" />
                  <span>1000+ Alunos</span>
                </div>
                <div className="flex items-center gap-2">
                  <Star className="h-5 w-5 text-[#d4af37]" />
                  <span>4.9/5 Avaliação</span>
                </div>
              </div>
            </div>

            {/* Imagem Hero */}
            <div className="relative group">
              <div className="absolute -inset-1 bg-gradient-to-r from-[#d4af37] to-[#00d4ff] rounded-2xl blur opacity-25 group-hover:opacity-40 transition duration-500"></div>
              <div className="relative bg-[#1a1f3a] rounded-2xl overflow-hidden border border-[#d4af37]/20">
                <img
                  src="https://d2xsxph8kpxj0f.cloudfront.net/310519663450047023/PGxtQu6Qre7RJc7YCJdar3/hero_bg_f4d93083.jpg"
                  alt="Curso Online"
                  className="w-full h-full object-cover rounded-2xl"
                />
                {/* Play Button Overlay */}
                <div className="absolute inset-0 flex items-center justify-center bg-black/40 hover:bg-black/20 transition-all cursor-pointer group" onClick={() => setVideoPlaying(true)}>
                  <div className="w-20 h-20 bg-[#d4af37] rounded-full flex items-center justify-center shadow-lg shadow-[#d4af37]/50 group-hover:scale-110 transition-transform">
                    <Play className="h-8 w-8 text-[#0a1628] ml-1" />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Divider */}
        <div className="h-px bg-gradient-to-r from-transparent via-[#d4af37]/30 to-transparent"></div>

        {/* Problem Section */}
        <section className="py-20 px-4">
          <div className="max-w-4xl mx-auto text-center space-y-12">
            <div className="space-y-4">
              <h2 className="text-5xl md:text-6xl font-black text-white">
                Qual é o Seu Maior Desafio?
              </h2>
              <p className="text-xl text-gray-400">
                Muitas pessoas têm conhecimento valioso, mas não sabem como monetizá-lo
              </p>
            </div>

            {/* Problem Cards */}
            <div className="grid md:grid-cols-3 gap-6 pt-8">
              {[
                {
                  title: "Falta de Estrutura",
                  description: "Não sabe como organizar seu conhecimento em um curso profissional",
                  icon: "📚",
                },
                {
                  title: "Baixas Vendas",
                  description: "Tem alunos, mas não consegue vender o suficiente para crescer",
                  icon: "📉",
                },
                {
                  title: "Falta de Autoridade",
                  description: "Seus alunos não veem você como especialista no assunto",
                  icon: "👤",
                },
              ].map((problem, idx) => (
                <Card
                  key={idx}
                  className="bg-[#1a1f3a]/50 border-[#d4af37]/20 hover:border-[#d4af37]/50 transition-all p-6 backdrop-blur-sm"
                >
                  <div className="text-4xl mb-4">{problem.icon}</div>
                  <h3 className="text-xl font-bold text-white mb-2">{problem.title}</h3>
                  <p className="text-gray-400">{problem.description}</p>
                </Card>
              ))}
            </div>
          </div>
        </section>

        {/* Divider */}
        <div className="h-px bg-gradient-to-r from-transparent via-[#00d4ff]/30 to-transparent"></div>

        {/* Solution Section */}
        <section className="py-20 px-4">
          <div className="max-w-6xl mx-auto">
            <div className="grid md:grid-cols-2 gap-12 items-center">
              {/* Imagem */}
              <div className="relative group order-2 md:order-1">
                <div className="absolute -inset-1 bg-gradient-to-r from-[#00d4ff] to-[#00ff88] rounded-2xl blur opacity-25 group-hover:opacity-40 transition duration-500"></div>
                <div className="relative bg-[#1a1f3a] rounded-2xl overflow-hidden border border-[#00d4ff]/20">
                <img
                  src="https://d2xsxph8kpxj0f.cloudfront.net/310519663450047023/PGxtQu6Qre7RJc7YCJdar3/product_mockup_081283c0.jpg"
                  alt="Plataforma de Cursos"
                  className="w-full h-full object-cover rounded-2xl"
                />
                </div>
              </div>

              {/* Texto */}
              <div className="space-y-8 order-1 md:order-2">
                <div className="space-y-4">
                  <h2 className="text-5xl md:text-6xl font-black text-white">
                    A Solução Completa
                  </h2>
                  <p className="text-xl text-gray-400">
                    Este template oferece tudo que você precisa para começar a vender seus cursos online profissionalmente.
                  </p>
                </div>

                {/* Features */}
                <div className="space-y-4">
                  {[
                    "Landing page de alta conversão",
                    "Design profissional e moderno",
                    "Totalmente customizável",
                    "Otimizado para vendas",
                    "Responsivo em todos os dispositivos",
                    "Pronto para integração com plataformas de pagamento",
                  ].map((feature, idx) => (
                    <div key={idx} className="flex items-center gap-3">
                      <CheckCircle2 className="h-6 w-6 text-[#00ff88] flex-shrink-0" />
                      <span className="text-lg text-gray-300">{feature}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Divider */}
        <div className="h-px bg-gradient-to-r from-transparent via-[#d4af37]/30 to-transparent"></div>

        {/* Testimonials Section */}
        <section className="py-20 px-4">
          <div className="max-w-6xl mx-auto">
            <div className="text-center mb-12">
              <h2 className="text-5xl md:text-6xl font-black text-white mb-4">
                Depoimentos de Alunos
              </h2>
              <p className="text-xl text-gray-400">
                Veja o que nossos alunos dizem sobre a experiência
              </p>
            </div>

            {/* Testimonial Cards */}
            <div className="grid md:grid-cols-2 gap-8">
              {[
                {
                  name: "Maria Silva",
                  role: "Empreendedora",
                  image: "testimonial_1",
                  text: "Este template me ajudou a criar minha primeira landing page profissional em poucas horas. Recomendo!",
                  rating: 5,
                },
                {
                  name: "João Santos",
                  role: "Consultor",
                  image: "testimonial_2",
                  text: "A qualidade do design é excepcional. Meus alunos ficaram impressionados com a profissionalidade.",
                  rating: 5,
                },
              ].map((testimonial, idx) => (
                <Card
                  key={idx}
                  className="bg-[#1a1f3a]/50 border-[#d4af37]/20 p-8 backdrop-blur-sm hover:border-[#d4af37]/50 transition-all"
                >
                  <div className="flex items-center gap-4 mb-4">
                    <img
                      src={testimonial.image === '/images/testimonial_1.jpg' ? 'https://d2xsxph8kpxj0f.cloudfront.net/310519663450047023/PGxtQu6Qre7RJc7YCJdar3/testimonial_1_995b011d.jpg' : 'https://d2xsxph8kpxj0f.cloudfront.net/310519663450047023/PGxtQu6Qre7RJc7YCJdar3/testimonial_2_64f1b997.jpg'}
                      alt={testimonial.name}
                      className="w-16 h-16 rounded-full object-cover border-2 border-[#d4af37]"
                    />
                    <div>
                      <h3 className="text-lg font-bold text-white">{testimonial.name}</h3>
                      <p className="text-sm text-gray-400">{testimonial.role}</p>
                    </div>
                  </div>
                  <div className="flex gap-1 mb-4">
                    {Array.from({ length: testimonial.rating }).map((_, i) => (
                      <Star key={i} className="h-5 w-5 fill-[#d4af37] text-[#d4af37]" />
                    ))}
                  </div>
                  <p className="text-gray-300 italic">\"{testimonial.text}\"</p>
                </Card>
              ))}
            </div>
          </div>
        </section>

        {/* Divider */}
        <div className="h-px bg-gradient-to-r from-transparent via-[#00ff88]/30 to-transparent"></div>

        {/* Pricing Section */}
        <section className="py-20 px-4">
          <div className="max-w-4xl mx-auto">
            <div className="text-center mb-12">
              <h2 className="text-5xl md:text-6xl font-black text-white mb-4">
                Oferta Especial
              </h2>
              <p className="text-xl text-gray-400">
                Acesso completo com todos os bônus inclusos
              </p>
            </div>

            {/* Pricing Card */}
            <Card className="bg-gradient-to-br from-[#1a1f3a] to-[#2d1b4e] border-[#d4af37]/30 p-8 md:p-12 backdrop-blur-sm relative overflow-hidden">
              {/* Glow Effect */}
              <div className="absolute top-0 right-0 w-96 h-96 bg-[#d4af37] rounded-full mix-blend-screen filter blur-3xl opacity-10"></div>

              <div className="relative z-10 space-y-6">
                <div className="space-y-2">
                  <p className="text-gray-400 text-lg">De: R$ 297,00</p>
                  <div className="flex items-baseline gap-2">
                    <span className="text-6xl font-black text-[#d4af37]">R$ 97</span>
                    <span className="text-gray-400">/acesso vitalício</span>
                  </div>
                  <p className="text-[#00ff88] font-bold">67% de desconto</p>
                </div>

                {/* Bonus List */}
                <div className="space-y-3 pt-6 border-t border-[#d4af37]/20">
                  <p className="text-white font-bold text-lg">Incluso nesta oferta:</p>
                  {[
                    "Acesso completo ao curso",
                    "Materiais de apoio em PDF",
                    "Certificado de conclusão",
                    "Suporte por email",
                    "Atualizações futuras",
                  ].map((bonus, idx) => (
                    <div key={idx} className="flex items-center gap-2">
                      <CheckCircle2 className="h-5 w-5 text-[#00ff88] flex-shrink-0" />
                      <span className="text-gray-300">{bonus}</span>
                    </div>
                  ))}
                </div>

                {/* CTA Button */}
                <Button
                  size="lg"
                  className="w-full bg-[#d4af37] hover:bg-[#e6c547] text-[#0a1628] font-bold text-lg py-6 rounded-lg shadow-lg shadow-[#d4af37]/50 transition-all duration-300 hover:shadow-[#d4af37]/70 mt-6"
                >
                  Garantir Meu Acesso Agora
                </Button>

                <p className="text-center text-gray-400 text-sm">
                  ✓ Garantia de 7 dias de reembolso
                </p>
              </div>
            </Card>
          </div>
        </section>

        {/* Divider */}
        <div className="h-px bg-gradient-to-r from-transparent via-[#d4af37]/30 to-transparent"></div>

        {/* CTA Final Section */}
        <section className="py-20 px-4">
          <div className="max-w-4xl mx-auto text-center space-y-8">
            <div className="space-y-4">
              <h2 className="text-5xl md:text-6xl font-black text-white">
                Pronto para Começar?
              </h2>
              <p className="text-xl text-gray-400">
                Não deixe essa oportunidade passar. Customize este template com seu nome e comece a vender hoje mesmo.
              </p>
            </div>

            <Button
              size="lg"
              className="bg-[#d4af37] hover:bg-[#e6c547] text-[#0a1628] font-bold text-lg px-12 py-6 rounded-lg shadow-lg shadow-[#d4af37]/50 transition-all duration-300 hover:shadow-[#d4af37]/70 hover:scale-105"
            >
              Começar Agora
            </Button>
          </div>
        </section>

        {/* Footer */}
        <footer className="border-t border-[#d4af37]/10 bg-[#0a1628]/50 py-12 px-4">
          <div className="max-w-6xl mx-auto">
            <div className="grid md:grid-cols-3 gap-8 mb-8">
              <div>
                <h3 className="text-white font-bold mb-4">Sobre</h3>
                <p className="text-gray-400 text-sm">
                  Template profissional de landing page para vendas de cursos online.
                </p>
              </div>
              <div>
                <h3 className="text-white font-bold mb-4">Links Rápidos</h3>
                <ul className="space-y-2 text-gray-400 text-sm">
                  <li><a href="#" className="hover:text-[#d4af37] transition">Início</a></li>
                  <li><a href="#" className="hover:text-[#d4af37] transition">Sobre</a></li>
                  <li><a href="#" className="hover:text-[#d4af37] transition">Contato</a></li>
                </ul>
              </div>
              <div>
                <h3 className="text-white font-bold mb-4">Redes Sociais</h3>
                <ul className="space-y-2 text-gray-400 text-sm">
                  <li><a href="#" className="hover:text-[#d4af37] transition">Instagram</a></li>
                  <li><a href="#" className="hover:text-[#d4af37] transition">Facebook</a></li>
                  <li><a href="#" className="hover:text-[#d4af37] transition">LinkedIn</a></li>
                </ul>
              </div>
            </div>

            <div className="border-t border-[#d4af37]/10 pt-8 text-center text-gray-400 text-sm">
              <p>&copy; 2026 Curso Base. Todos os direitos reservados.</p>
            </div>
          </div>
        </footer>
      </div>
    </div>
  );
}
