'use client';

import { useState, useRef, useEffect } from 'react';
import { ArrowLeft, ArrowRight, ChevronLeft, ChevronRight } from 'lucide-react';
import Link from 'next/link';
import { Card } from '@/../components/ui/card';

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

interface ContentSliderProps {
  title?: string;
  description?: string;
  cta?: {
    label: string;
    link: string;
  };
  items?: Array<{
    id: string;
    title: string;
    description: string;
    imageUrl: string | null;
    link: string;
    color: string;
    icon: React.ReactNode;
  }>;
}

export function ContentSlider({ 
  title = "コンテンツハイライト", 
  description = "3日間で行われる様々な企画をチェックしよう", 
  cta, 
  items = contentCards 
}: ContentSliderProps) {
  const containerRef = useRef<HTMLDivElement>(null);
  
  const scrollLeft = () => {
    if (containerRef.current) {
      containerRef.current.scrollBy({ left: -300, behavior: 'smooth' });
    }
  };
  
  const scrollRight = () => {
    if (containerRef.current) {
      containerRef.current.scrollBy({ left: 300, behavior: 'smooth' });
    }
  };

  // 安全対策: itemsが配列でない場合のフォールバック
  const safeItems = Array.isArray(items) ? items : contentCards;

  return (
    <section className="py-16 md:py-24">
      <div className="container">
        <div className="mb-8 max-w-xl">
          <h2 className="font-display text-3xl font-bold tracking-tight sm:text-4xl md:text-5xl">
            {title}
          </h2>
          <p className="mt-4 text-muted-foreground">
            {description}
          </p>
          {cta && (
            <Link 
              href={cta.link} 
              className="mt-6 inline-flex h-10 items-center justify-center rounded-md bg-primary px-4 py-2 text-sm font-medium text-primary-foreground ring-offset-background transition-colors hover:bg-primary/90 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50"
            >
              <span>{cta.label}</span>
              <ArrowRight className="ml-2 h-4 w-4" />
            </Link>
          )}
        </div>

        <div className="relative">
          <div className="flex items-center justify-end gap-2 mb-4">
            <button
              onClick={scrollLeft}
              className="inline-flex h-10 w-10 items-center justify-center rounded-full border border-input bg-background text-sm font-medium ring-offset-background transition-colors hover:bg-accent hover:text-accent-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50"
              aria-label="前のアイテムへスクロール"
            >
              <ChevronLeft className="h-4 w-4" />
            </button>
            <button
              onClick={scrollRight}
              className="inline-flex h-10 w-10 items-center justify-center rounded-full border border-input bg-background text-sm font-medium ring-offset-background transition-colors hover:bg-accent hover:text-accent-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50"
              aria-label="次のアイテムへスクロール"
            >
              <ChevronRight className="h-4 w-4" />
            </button>
          </div>
          
          <div 
            ref={containerRef}
            className="flex gap-4 overflow-x-auto pb-4 scrollbar-hide snap-x"
          >
            {safeItems.map((item) => (
              <div key={item.id} className="snap-start flex-shrink-0 w-[280px] sm:w-[320px]">
                <Link href={item.link} className="h-full">
                  <Card className="h-full overflow-hidden hover:shadow-md transition-all duration-200 hover:translate-y-[-4px]">
                    <div className={`w-full h-32 bg-gradient-to-br ${item.color} flex items-center justify-center`}>
                      <div className="w-16 h-16 flex items-center justify-center">
                        {item.icon}
                      </div>
                    </div>
                    
                    <div className="p-4">
                      <h3 className="text-xl font-semibold mb-2">{item.title}</h3>
                      <p className="text-sm text-muted-foreground mb-4">
                        {item.description}
                      </p>
                      <div className="flex items-center text-sm font-medium text-primary">
                        <span>詳細を見る</span>
                        <ArrowRight className="ml-1 h-4 w-4" />
                      </div>
                    </div>
                  </Card>
                </Link>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}