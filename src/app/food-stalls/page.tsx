import { ArrowLeft } from 'lucide-react';
import Link from 'next/link';
import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: '模擬店・屋台 | 大学祭2025',
  description: '各サークルによる飲食ブース。世界各国の料理や創作メニューをお楽しみに。',
};

export default function FoodStallsPage() {
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
        模擬店・屋台
      </h1>
      
      <div className="w-full h-64 md:h-96 bg-gradient-to-br from-orange-500/20 to-red-500/20 rounded-lg mb-8 flex items-center justify-center">
        <svg xmlns="http://www.w3.org/2000/svg" width="64" height="64" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-orange-500">
          <path d="M16 2H8a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h8a2 2 0 0 0 2-2V4a2 2 0 0 0-2-2Z"></path>
          <path d="M12 14v4"></path>
          <path d="M12 6h.01"></path>
        </svg>
      </div>
      
      <div className="prose prose-lg max-w-none">
        <p className="lead">各サークルによる飲食ブース。世界各国の料理や創作メニューをお楽しみに。</p>
        
        <h2>開催場所</h2>
        <p>中央広場周辺、第二グラウンド</p>
        
        <h2>営業時間</h2>
        <p>
          1日目: 10:00〜20:00<br />
          2日目: 10:00〜20:00<br />
          3日目: 10:00〜17:00
        </p>
        
        <h2>出店一覧</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 not-prose mb-8">
          <div className="border rounded-lg p-4">
            <h3 className="text-lg font-semibold">国際交流サークル</h3>
            <p className="text-muted-foreground">世界の料理フェア（タイ料理、メキシコ料理など）</p>
          </div>
          <div className="border rounded-lg p-4">
            <h3 className="text-lg font-semibold">料理研究会</h3>
            <p className="text-muted-foreground">特製クレープ各種</p>
          </div>
          <div className="border rounded-lg p-4">
            <h3 className="text-lg font-semibold">演劇部</h3>
            <p className="text-muted-foreground">チュロス＆ホットドリンク</p>
          </div>
          <div className="border rounded-lg p-4">
            <h3 className="text-lg font-semibold">野球部</h3>
            <p className="text-muted-foreground">焼きそば＆フランクフルト</p>
          </div>
          <div className="border rounded-lg p-4">
            <h3 className="text-lg font-semibold">写真部</h3>
            <p className="text-muted-foreground">タピオカドリンク各種</p>
          </div>
          <div className="border rounded-lg p-4">
            <h3 className="text-lg font-semibold">ダンス部</h3>
            <p className="text-muted-foreground">特製カレー</p>
          </div>
        </div>
        
        <h2>注意事項</h2>
        <ul>
          <li>食品アレルギーをお持ちの方は、各店舗でスタッフにご確認ください</li>
          <li>ゴミは指定のゴミ箱に分別して捨ててください</li>
          <li>混雑時は整理券を配布する場合があります</li>
          <li>売り切れ次第終了する店舗もあります</li>
        </ul>
      </div>
    </div>
  );
} 