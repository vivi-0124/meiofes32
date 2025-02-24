import { Button } from '@/../components/ui/button';
import { ButtonContent } from '@/../components/ui/button-content';
import Link from 'next/link';
import { ArrowRight } from 'lucide-react';

export function GuidelinesSection() {
  const guidelines = [
    {
      icon: (
        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-[#E84D8A]"><circle cx="12" cy="12" r="10"/><path d="m12 16 4-4"/><path d="m12 16-4-4"/><path d="M12 8v4"/></svg>
      ),
      title: '開催時間',
      text: '毎日10:00から20:00まで開催。最終入場は19:30までです。',
    },
    {
      icon: (
        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-[#E84D8A]"><path d="M6 2v20Zm.29.29.29-.3Zm11.21.14C19.65 2.15 21 3.5 21 5.64c0 1.7-1 3.81-2.13 5.33A18 18 0 0 1 12 16.54a18 18 0 0 1-6.87-5.56C4 9.45 3 7.33 3 5.64 3 3.5 4.35 2.14 6.46 2.14c2.1 0 3.46 1.01 4.45 2.84a1.35 1.35 0 0 0 2.18 0c.99-1.82 2.35-2.84 4.45-2.84Z"/></svg>
      ),
      title: '入場料',
      text: '完全無料！どなたでもご参加いただけます。ぜひお気軽にお越しください。',
    },
    {
      icon: (
        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-[#E84D8A]"><path d="M3 9h18v10a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V9Z"/><path d="m3 9 2.45-4.9A2 2 0 0 1 7.24 3h9.52a2 2 0 0 1 1.8 1.1L21 9"/><path d="M12 3v6"/></svg>
      ),
      title: '持ち物',
      text: '飲食物の持ち込みは可能です。ゴミは指定の場所に捨てるようご協力ください。',
    },
    {
      icon: (
        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-[#E84D8A]"><path d="M19 5.2c-.33-.15-.68-.23-1.07-.23-1.55 0-2.93.95-3.93 1.83-1 .87-1.93 1.9-3 1.9s-2-.95-3-1.8c-1-1-2.33-1.9-3.9-1.9-.4 0-.73.06-1.1.22"/><path d="M19 9.75c-.5-.17-1-.25-1.5-.25-1.5 0-2.7.95-3.5 1.67-.8.7-1.5 1.53-2.5 1.53s-1.7-.74-2.5-1.5c-.86-.8-2-1.7-3.5-1.7-.5 0-1 .08-1.5.25"/><path d="M19 14c-.5-.17-1-.25-1.5-.25-1.5 0-2.7.95-3.5 1.67-.8.7-1.5 1.33-2.5 1.33s-1.7-.63-2.5-1.33c-.8-.72-2-1.67-3.5-1.67-.5 0-1 .08-1.5.25"/><path d="M19 14v4c0 1.1-.9 2-2 2H7a2 2 0 0 1-2-2v-4"/><path d="M12 4v1"/><path d="M10 4h4"/><path d="M10 19h4"/></svg>
      ),
      title: 'マナー',
      text: '他の来場者の迷惑になる行為はお控えください。スタッフの指示に従いましょう。',
    },
  ];

  return (
    <section className="py-16 md:py-24 bg-muted">
      <div className="container">
        <div className="text-center mb-14">
          <h2 className="text-3xl md:text-4xl font-bold tracking-tight mb-4">ご来場案内</h2>
          <p className="text-xl text-muted-foreground max-w-[800px] mx-auto">
            楽しく安全に大学祭を楽しむための基本情報をご案内します
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-14">
          {guidelines.map((item, index) => (
            <div key={index} className="flex gap-4 p-6 bg-background rounded-lg">
              <div className="flex-shrink-0 w-12 h-12 flex items-center justify-center rounded-full bg-primary/10">
                {item.icon}
              </div>
              <div>
                <h3 className="text-xl font-semibold mb-2">{item.title}</h3>
                <p className="text-muted-foreground">{item.text}</p>
              </div>
            </div>
          ))}
        </div>

        <div className="flex justify-center">
          <Link 
            href="/visitor-guidelines"
            className="inline-flex items-center justify-center h-11 px-8 py-2 text-sm font-medium text-white bg-[#E84D8A] rounded-md hover:bg-[#E84D8A]/90 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50"
          >
            <span className="flex items-center">
              詳しい案内を見る
              <ArrowRight className="ml-2 h-4 w-4" />
            </span>
          </Link>
        </div>
      </div>
    </section>
  );
}