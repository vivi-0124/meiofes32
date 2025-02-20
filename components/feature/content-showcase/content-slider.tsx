'use client';

import { useState, useRef, useEffect } from 'react';
import { ArrowLeft, ArrowRight } from 'lucide-react';
import { Button } from '@/../components/ui/button';
import { ContentCard } from '@/../components/feature/content-showcase/content-card';

const contentCards = [
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
  {
    id: '3',
    title: '教室企画',
    description: '研究室公開や体験イベント、展示企画など。知的好奇心を刺激する企画が満載。',
    imageUrl: null,
    link: '/classroom',
    color: 'from-blue-500/20 to-cyan-500/20',
    icon: (
      <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-blue-500"><path d="M22 9a4 4 0 0 1-4 4H4a4 4 0 0 1-4-4V5a4 4 0 0 1 4-4h.5c3.35 0 6 2.57 6 5.5a5.02 5.02 0 0 1-3.83 4.83c.35.5.98.73 1.4.73H22Z"></path><path d="M6 12v4c0 1.1.9 2 2 2h12c1.1 0 2-.9 2-2v-4"></path></svg>
    ),
  },
  {
    id: '4',
    title: '特別講演会',
    description: '著名人を招いた講演会やパネルディスカッション。刺激的なトークをお楽しみに。',
    imageUrl: null,
    link: '/lecture',
    color: 'from-green-500/20 to-emerald-500/20',
    icon: (
      <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-green-500"><rect width="16" height="20" x="4" y="2" rx="2" ry="2"></rect><path d="M9 22v-4h6v4"></path><path d="M8 10h8"></path><path d="M8 6h8"></path><path d="M8 14h8"></path></svg>
    ),
  },
  {
    id: '5',
    title: 'ゲーム大会',
    description: 'eスポーツ大会や伝統的なゲーム企画。友達と参加して優勝を目指そう！',
    imageUrl: null,
    link: '/games',
    color: 'from-purple-500/20 to-indigo-500/20',
    icon: (
      <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-purple-500"><rect width="20" height="12" x="2" y="6" rx="2"></rect><path d="M12 12h.01"></path><path d="M17 12h.01"></path><path d="M7 12h.01"></path></svg>
    ),
  },
];

export function ContentSlider() {
  const sliderRef = useRef<HTMLDivElement>(null);
  const [canScrollLeft, setCanScrollLeft] = useState(false);
  const [canScrollRight, setCanScrollRight] = useState(true);

  const checkScrollButtons = () => {
    if (sliderRef.current) {
      const { scrollLeft, scrollWidth, clientWidth } = sliderRef.current;
      setCanScrollLeft(scrollLeft > 0);
      setCanScrollRight(scrollLeft < scrollWidth - clientWidth - 10); // 10px margin for rounding errors
    }
  };

  useEffect(() => {
    const slider = sliderRef.current;
    if (slider) {
      checkScrollButtons();
      slider.addEventListener('scroll', checkScrollButtons);
      window.addEventListener('resize', checkScrollButtons);
      
      return () => {
        slider.removeEventListener('scroll', checkScrollButtons);
        window.removeEventListener('resize', checkScrollButtons);
      };
    }
  }, []);

  const scrollLeft = () => {
    if (sliderRef.current) {
      sliderRef.current.scrollBy({ left: -300, behavior: 'smooth' });
    }
  };

  const scrollRight = () => {
    if (sliderRef.current) {
      sliderRef.current.scrollBy({ left: 300, behavior: 'smooth' });
    }
  };

  return (
    <section className="py-16 bg-background">
      <div className="container">
        <div className="flex flex-col md:flex-row justify-between items-center mb-8">
          <div>
            <h2 className="text-3xl font-bold tracking-tight mb-2">コンテンツハイライト</h2>
            <p className="text-muted-foreground">3日間で行われる様々な企画をチェックしよう</p>
          </div>
          <div className="flex space-x-2 mt-4 md:mt-0">
            <Button
              variant="outline"
              size="icon"
              onClick={scrollLeft}
              disabled={!canScrollLeft}
              aria-label="前へスクロール"
              className="rounded-full"
            >
              <ArrowLeft className="h-4 w-4" />
            </Button>
            <Button
              variant="outline"
              size="icon"
              onClick={scrollRight}
              disabled={!canScrollRight}
              aria-label="次へスクロール"
              className="rounded-full"
            >
              <ArrowRight className="h-4 w-4" />
            </Button>
          </div>
        </div>

        <div 
          ref={sliderRef}
          className="flex space-x-4 overflow-x-auto pb-6 -mx-4 px-4 scrollbar-hide"
          style={{ scrollbarWidth: 'none', msOverflowStyle: 'none' }}
        >
          {contentCards.map((card) => (
            <ContentCard key={card.id} card={card} />
          ))}
        </div>
      </div>
    </section>
  );
}