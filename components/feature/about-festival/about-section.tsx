import { Button } from '@/../components/ui/button';
import { ButtonContent } from '@/../components/ui/button-content';
import Link from 'next/link';
import { ArrowRight } from 'lucide-react';

export function AboutSection() {
  const features = [
    {
      icon: (
        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-[#E84D8A]"><circle cx="8" cy="18" r="4"/><path d="M12 18V2l7 4"/></svg>
      ),
      title: '音楽ライブ',
      description: '学内外のミュージシャンによる多彩なステージパフォーマンス',
    },
    {
      icon: (
        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-[#E84D8A]"><path d="M17 11v2a3 3 0 0 1-3 3H5"/><path d="M11 16H3"/><path d="M13 8H7C5.34 8 4 6.66 4 5s1.34-3 3-3h8c1.66 0 3 1.34 3 3"/><path d="M17 16h3c1.66 0 3-1.34 3-3s-1.34-3-3-3h-3"/></svg>
      ),
      title: '模擬店・屋台',
      description: '学生団体による多種多様な料理やドリンクの屋台が勢揃い',
    },
    {
      icon: (
        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-[#E84D8A]"><path d="M8 2h8a2 2 0 0 1 2 2v2a2 2 0 0 1-2 2H8a2 2 0 0 1-2-2V4a2 2 0 0 1 2-2Z"/><path d="M16 10h-4v4H8v6a2 2 0 0 0 2 2h8a2 2 0 0 0 2-2V14h-4v-4Z"/></svg>
      ),
      title: '展示・企画',
      description: '研究発表や作品展示、体験型アトラクションなど知的好奇心を刺激',
    },
    {
      icon: (
        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-[#E84D8A]"><rect width="18" height="18" x="3" y="3" rx="2"/><path d="M8 12h8"/><path d="M12 8v8"/></svg>
      ),
      title: '特別講演',
      description: '各界の著名人を招いた特別講演やパネルディスカッション',
    },
  ];

  return (
    <section className="py-16 md:py-24 bg-background">
      <div className="container">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold tracking-tight mb-4">大学祭について</h2>
          <p className="text-xl text-muted-foreground max-w-[800px] mx-auto">
            半世紀以上の歴史を持つ伝統ある大学祭。毎年10万人以上が訪れる日本最大級の学園祭です。
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {features.map((feature, index) => (
            <div 
              key={index}
              className="bg-muted/50 rounded-lg p-6 text-center hover:bg-muted transition-colors"
            >
              <div className="inline-flex items-center justify-center w-12 h-12 rounded-full bg-primary/10 mb-4">
                {feature.icon}
              </div>
              <h3 className="text-xl font-semibold mb-2">{feature.title}</h3>
              <p className="text-muted-foreground">{feature.description}</p>
            </div>
          ))}
        </div>

        <div className="mt-16 text-center">
          <div className="mb-8 max-w-[650px] mx-auto">
            <p className="text-lg">
              私たちの大学祭は単なるイベントではなく、学生の創造性と情熱が結集する場所です。
              伝統と革新が融合した3日間の祭典で、あなただけの思い出を作りませんか？
            </p>
          </div>
          <Link 
            href="/about"
            className="inline-flex items-center justify-center h-11 px-8 py-2 text-sm font-medium rounded-md border border-input bg-background hover:bg-accent hover:text-accent-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2"
          >
            <span className="flex items-center">
              もっと詳しく知る
              <ArrowRight className="ml-2 h-4 w-4" />
            </span>
          </Link>
        </div>
      </div>
    </section>
  );
}