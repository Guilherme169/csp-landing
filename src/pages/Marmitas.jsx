import Header from '../components/Header';
import Hero from '../components/Hero';
import TrustBar from '../components/TrustBar';
import ProblemSolution from '../components/ProblemSolution';
import VideoSection from '../components/VideoSection';
import ProductShowcase from '../components/ProductShowcase';
import SocialProof from '../components/SocialProof';
import LeadForm from '../components/LeadForm';
import CTA from '../components/CTA';
import Footer from '../components/Footer';

export default function Marmitas() {
  return (
    <>
      <Header />
      <main>
        <Hero />
        <TrustBar />
        <ProblemSolution />
        {/* Seção escura — contraste proposital */}
        <VideoSection
          dark
          eyebrow="Bastidores"
          title="Veja como produzimos em escala"
          subtitle="Estrutura própria, processos validados em mais de 15 anos de mercado."
          src="/videos/processo.mp4"
        />
        <ProductShowcase />
        <VideoSection
          eyebrow="Transformação real"
          title="A diferença de uma embalagem profissional"
          subtitle="Veja o impacto na percepção do cliente final."
          src="/videos/influencer.mp4"
        />
        <SocialProof />
        <LeadForm />
        <CTA />
      </main>
      <Footer />
    </>
  );
}
