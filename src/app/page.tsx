import { HeroSection } from '@/../components/feature/hero/hero-section';
import { AboutSection } from '@/../components/feature/about-festival/about-section';
import { NewsSection } from '@/../components/feature/news/news-section';
import { ContentSlider } from '@/../components/feature/content-showcase/content-slider';

export default function Home() {
  return (
    <>
      <HeroSection />
      <AboutSection />
      <NewsSection />
      <ContentSlider />
    </>
  );
}
