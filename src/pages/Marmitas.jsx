import Header from '../components/Header';
import Hero from '../components/Hero';
import TrustBar from '../components/TrustBar';
import SocialProof from '../components/SocialProof';
import InlineCTA from '../components/InlineCTA';
import ProblemSolution from '../components/ProblemSolution';
import ProductShowcase from '../components/ProductShowcase';
import VideoSection from '../components/VideoSection';
import LeadForm from '../components/LeadForm';
import CTA from '../components/CTA';
import Footer from '../components/Footer';

const WA_LINK = 'https://wa.me/5551984304699';

export default function Marmitas() {
  return (
    <>
      <Header />
      <main>
        {/* 1. Hero */}
        <Hero />
        <TrustBar />

        {/* 2. Prova social imediata — feedback de cliente */}
        <SocialProof />
        <InlineCTA
          text="Quero personalizar minha embalagem"
          scrollTo="form"
          bg="var(--bg-alt)"
          pixelEvents="Lead"
        />

        {/* 3. Identificação do problema */}
        <ProblemSolution />
        <InlineCTA
          text="Quero orçar no WhatsApp"
          href={WA_LINK}
          bg="var(--bg)"
          pixelEvents={['Lead', 'Contact']}
        />

        {/* 4. Diferença de uma embalagem profissional */}
        <ProductShowcase />
        <VideoSection
          eyebrow="Transformação real"
          title="A diferença de uma embalagem profissional"
          subtitle="Veja o impacto na percepção do cliente final."
          src="/videos/influencer.mp4"
        />
        <InlineCTA
          text="Orçar e comprar agora"
          scrollTo="form"
          bg="var(--bg)"
          pixelEvents="Lead"
        />

        {/* 5. Bastidores — valida profissionalismo após prova social */}
        <VideoSection
          dark
          eyebrow="Bastidores"
          title="Veja como produzimos em escala"
          subtitle="Estrutura própria, processos validados em mais de 15 anos de mercado."
          src="/videos/processo.mp4"
        />
        <InlineCTA
          text="Quero personalizar minha embalagem"
          scrollTo="form"
          bg="var(--bg-alt)"
          topPadding={48}
          pixelEvents="Lead"
        />

        {/* 6. CTA final */}
        <LeadForm />
        <CTA />
      </main>
      <Footer />
    </>
  );
}
