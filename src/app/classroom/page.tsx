import { ArrowLeft } from 'lucide-react';
import Link from 'next/link';
import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: '教室企画 | 大学祭2025',
  description: '研究室公開や体験イベント、展示企画など。知的好奇心を刺激する企画が満載。',
};

export default function ClassroomPage() {
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
        教室企画
      </h1>
      
      <div className="w-full h-64 md:h-96 bg-gradient-to-br from-blue-500/20 to-cyan-500/20 rounded-lg mb-8 flex items-center justify-center">
        <svg xmlns="http://www.w3.org/2000/svg" width="64" height="64" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-blue-500">
          <path d="M22 9a4 4 0 0 1-4 4H4a4 4 0 0 1-4-4V5a4 4 0 0 1 4-4h.5c3.35 0 6 2.57 6 5.5a5.02 5.02 0 0 1-3.83 4.83c.35.5.98.73 1.4.73H22Z"></path>
          <path d="M6 12v4c0 1.1.9 2 2 2h12c1.1 0 2-.9 2-2v-4"></path>
        </svg>
      </div>
      
      <div className="prose prose-lg max-w-none">
        <p className="lead">研究室公開や体験イベント、展示企画など。知的好奇心を刺激する企画が満載。</p>
        
        <h2>開催場所</h2>
        <p>第1教育棟、第2教育棟、研究棟</p>
        
        <h2>開催時間</h2>
        <p>
          1日目: 10:00〜17:00<br />
          2日目: 10:00〜17:00<br />
          3日目: 10:00〜16:00
        </p>
        
        <h2>主な企画</h2>
        
        <h3>研究室公開</h3>
        <p>普段は入ることのできない研究室を特別公開。最先端の研究成果や実験装置を見学できます。</p>
        <ul>
          <li>物理学研究室（第1教育棟3階）- 超伝導実験デモンストレーション</li>
          <li>化学研究室（研究棟2階）- 化学反応ショー</li>
          <li>情報工学研究室（第2教育棟4階）- VR体験コーナー</li>
          <li>生物学研究室（研究棟1階）- 微生物観察会</li>
        </ul>
        
        <h3>体験イベント</h3>
        <p>様々な学問や技術を楽しく体験できるワークショップを開催。</p>
        <ul>
          <li>プログラミング教室（第2教育棟2階201教室）- 初心者向けゲーム作り</li>
          <li>科学実験教室（第1教育棟1階大実験室）- 不思議な科学現象を体験</li>
          <li>外国語会話コーナー（第1教育棟4階401教室）- 留学生との交流</li>
          <li>ロボット操作体験（研究棟3階ロボット工学実験室）- 最新ロボットの操縦体験</li>
        </ul>
        
        <h3>展示企画</h3>
        <p>学生たちの研究成果や作品を展示。</p>
        <ul>
          <li>美術部作品展（第1教育棟2階ギャラリー）</li>
          <li>建築模型展示（第2教育棟1階エントランスホール）</li>
          <li>写真部写真展「キャンパスの四季」（第1教育棟1階廊下）</li>
          <li>文芸部小説・詩集展示（第2教育棟3階図書コーナー）</li>
        </ul>
        
        <h2>注意事項</h2>
        <ul>
          <li>一部の企画は整理券が必要です（当日配布）</li>
          <li>研究室内では係員の指示に従ってください</li>
          <li>展示物には触れないでください</li>
          <li>教室内での飲食は禁止です</li>
          <li>写真撮影が禁止されている区域があります</li>
        </ul>
      </div>
    </div>
  );
} 