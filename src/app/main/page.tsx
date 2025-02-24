import { HeroSection } from '@/../components/feature/hero/hero-section';
import { AboutSection } from '@/../components/feature/about-festival/about-section';
import { ContentSlider } from '@/../components/feature/content-showcase/content-slider';
import { GuidelinesSection } from '@/../components/feature/visitor-guidelines/guidelines-section';
import { NewsSection } from '@/../components/feature/news/news-section';
import Link from 'next/link';
import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: '大学祭2025 - 日本最大級の大学祭',
  description: '2025年6月に開催される日本最大級の大学祭。様々なイベント、フードや展示を楽しもう！',
  openGraph: {
    images: '/images/og/default.jpg',
  },
};

export default function HomePage() {
  // ContentSlider用のダミーデータを定義
  const contentItems = [
    {
      id: '1',
      title: '屋外ステージ',
      description: '学内バンドやダンスサークルによるパフォーマンス。特別ゲストも出演予定！',
      imageUrl: null,
      link: '/outdoor-stage',
      color: 'from-pink-500/20 to-purple-500/20',
      icon: (
        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-[#E84D8A]"><path d="M4 12v6"></path><path d="M4 6v2"></path><path d="M14 12v6"></path><path d="M14 6v2"></path><path d="M4 10h10"></path><path d="M14 10h6"></path><path d="M20 6v12"></path></svg>
      ),
    },
    {
      id: '2',
      title: '模擬店・屋台',
      description: '各サークルによる飲食ブース。世界各国の料理や創作メニューをお楽しみに。',
      imageUrl: null,
      link: '/food-stalls',
      color: 'from-orange-500/20 to-red-500/20',
      icon: (
        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-orange-500"><path d="M16 2H8a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h8a2 2 0 0 0 2-2V4a2 2 0 0 0-2-2Z"></path><path d="M12 14v4"></path><path d="M12 6h.01"></path></svg>
      ),
    },
  ];

  return (
    <>
      <HeroSection />
      <AboutSection />
      <NewsSection />
      {/* ContentSliderのシンプルな使用方法 */}
      <ContentSlider 
        title="コンテンツハイライト"
        description="3日間で行われる様々な企画をチェックしよう"
        items={contentItems}
      />
      <GuidelinesSection />
    </>
  );
}