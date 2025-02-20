import { HeroSection } from '@/../components/feature/hero/hero-section';
import { AboutSection } from '@/../components/feature/about-festival/about-section';
import { ContentSlider } from '@/../components/feature/content-showcase/content-slider';
import { GuidelinesSection } from '@/../components/feature/visitor-guidelines/guidelines-section';
import { NewsSection } from '@/../components/feature/news/news-section';
import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: '大学祭2025 - 日本最大級の大学祭',
  description: '2025年6月に開催される日本最大級の大学祭。様々なイベント、フードや展示を楽しもう！',
  openGraph: {
    images: '/images/og/default.jpg',
  },
};

export default function HomePage() {
  return (
    <>
      <HeroSection />
      <AboutSection />
      <NewsSection />
      <ContentSlider />
      <GuidelinesSection />
    </>
  );
}