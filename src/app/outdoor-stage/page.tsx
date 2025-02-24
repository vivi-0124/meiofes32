import { ArrowLeft } from 'lucide-react';
import Link from 'next/link';
import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: '屋外ステージ | 大学祭2025',
  description: '学内バンドやダンスサークルによるパフォーマンス。特別ゲストも出演予定！',
};

export default function OutdoorStagePage() {
  return (
    <div className="container py-12 md:py-20">
      <Link 
        href="/" 
        className="inline-flex items-center text-sm text-muted-foreground hover:text-foreground mb-6"
      >
        <ArrowLeft className="mr-2 h-4 w-4" />
        トップページに戻る
      </Link>
      
      <h1 className="text-4xl font-bold tracking-tight md:text-5xl mb-6">
        屋外ステージ
      </h1>
      
      <div className="w-full h-64 md:h-96 bg-gradient-to-br from-pink-500/20 to-purple-500/20 rounded-lg mb-8 flex items-center justify-center">
        <svg xmlns="http://www.w3.org/2000/svg" width="64" height="64" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-[#E84D8A]">
          <path d="M4 12v6"></path>
          <path d="M4 6v2"></path>
          <path d="M14 12v6"></path>
          <path d="M14 6v2"></path>
          <path d="M4 10h10"></path>
          <path d="M14 10h6"></path>
          <path d="M20 6v12"></path>
        </svg>
      </div>
      
      <div className="prose prose-lg max-w-none">
        <p className="lead">学内バンドやダンスサークルによるパフォーマンス。特別ゲストも出演予定！</p>
        
        <h2>開催場所</h2>
        <p>中央広場特設ステージ</p>
        
        <h2>開催時間</h2>
        <p>
          1日目: 10:00〜18:00<br />
          2日目: 10:00〜19:00<br />
          3日目: 10:00〜17:00
        </p>
        
        <h2>出演者</h2>
        <ul>
          <li>学内バンドサークル「Sound Wave」</li>
          <li>ダンスサークル「Groove Masters」</li>
          <li>軽音楽部</li>
          <li>特別ゲスト（近日発表）</li>
        </ul>
        
        <h2>注意事項</h2>
        <ul>
          <li>荒天の場合は中止または延期となる場合があります</li>
          <li>ステージ前方は混雑が予想されます</li>
          <li>写真撮影は可能ですが、フラッシュの使用はご遠慮ください</li>
          <li>ステージ周辺での飲食はご遠慮ください</li>
        </ul>
      </div>
    </div>
  );
} 