import { Header } from './components/Header';
import { Hero } from './components/Hero';
import { TechnologiesCarousel } from './components/TechnologiesCarousel';
import { ShowcaseSection } from './components/ShowcaseSection';
import { EngagementMetrics } from './components/EngagementMetrics';
import { Footer } from './components/Footer';

export default function App() {
  return (
    <div className="min-h-screen bg-black text-white overflow-x-hidden">
      <Header />
      <Hero />
      <TechnologiesCarousel />
      <ShowcaseSection />
      <EngagementMetrics />
      <Footer />
    </div>
  );
}