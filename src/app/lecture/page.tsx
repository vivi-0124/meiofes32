import { ArrowLeft } from 'lucide-react';
import Link from 'next/link';
import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: '特別講演会 | 大学祭2025',
  description: '著名人を招いた講演会やパネルディスカッション。刺激的なトークをお楽しみに。',
};

export default function LecturePage() {
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
        特別講演会
      </h1>
      
      <div className="w-full h-64 md:h-96 bg-gradient-to-br from-green-500/20 to-emerald-500/20 rounded-lg mb-8 flex items-center justify-center">
        <svg xmlns="http://www.w3.org/2000/svg" width="64" height="64" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-green-500">
          <rect width="16" height="20" x="4" y="2" rx="2" ry="2"></rect>
          <path d="M9 22v-4h6v4"></path>
          <path d="M8 10h8"></path>
          <path d="M8 6h8"></path>
          <path d="M8 14h8"></path>
        </svg>
      </div>
      
      <div className="prose prose-lg max-w-none">
        <p className="lead">著名人を招いた講演会やパネルディスカッション。刺激的なトークをお楽しみに。</p>
        
        <h2>開催場所</h2>
        <p>大学講堂、第1教育棟大講義室</p>
        
        <h2>講演スケジュール</h2>
        
        <div className="not-prose space-y-6 my-8">
          <div className="border rounded-lg p-6 bg-card">
            <div className="flex flex-col md:flex-row md:items-center justify-between gap-4 mb-4">
              <div>
                <h3 className="text-xl font-bold">未来技術と社会変革</h3>
                <p className="text-muted-foreground">山田太郎氏（テクノロジー評論家）</p>
              </div>
              <div className="bg-primary/10 text-primary px-4 py-2 rounded-full text-sm font-medium">
                1日目 13:00〜14:30
              </div>
            </div>
            <p>AI、ロボティクス、宇宙開発など最先端技術が私たちの社会をどのように変えていくのか、その可能性と課題について語ります。</p>
            <div className="mt-4 text-sm">
              <span className="font-medium">場所:</span> 大学講堂
            </div>
          </div>
          
          <div className="border rounded-lg p-6 bg-card">
            <div className="flex flex-col md:flex-row md:items-center justify-between gap-4 mb-4">
              <div>
                <h3 className="text-xl font-bold">クリエイティブの力</h3>
                <p className="text-muted-foreground">佐藤花子氏（映画監督）</p>
              </div>
              <div className="bg-primary/10 text-primary px-4 py-2 rounded-full text-sm font-medium">
                1日目 16:00〜17:30
              </div>
            </div>
            <p>国際的に評価される作品を生み出してきた佐藤監督が、創造性の源泉と表現の可能性について語ります。</p>
            <div className="mt-4 text-sm">
              <span className="font-medium">場所:</span> 第1教育棟大講義室
            </div>
          </div>
          
          <div className="border rounded-lg p-6 bg-card">
            <div className="flex flex-col md:flex-row md:items-center justify-between gap-4 mb-4">
              <div>
                <h3 className="text-xl font-bold">パネルディスカッション「持続可能な社会の実現に向けて」</h3>
                <p className="text-muted-foreground">環境活動家、企業経営者、研究者によるディスカッション</p>
              </div>
              <div className="bg-primary/10 text-primary px-4 py-2 rounded-full text-sm font-medium">
                2日目 11:00〜12:30
              </div>
            </div>
            <p>気候変動や資源枯渇など地球規模の課題に対して、異なる立場からの視点と解決策を議論します。</p>
            <div className="mt-4 text-sm">
              <span className="font-medium">場所:</span> 大学講堂
            </div>
          </div>
          
          <div className="border rounded-lg p-6 bg-card">
            <div className="flex flex-col md:flex-row md:items-center justify-between gap-4 mb-4">
              <div>
                <h3 className="text-xl font-bold">宇宙から見た地球</h3>
                <p className="text-muted-foreground">鈴木一郎氏（元宇宙飛行士）</p>
              </div>
              <div className="bg-primary/10 text-primary px-4 py-2 rounded-full text-sm font-medium">
                2日目 15:00〜16:30
              </div>
            </div>
            <p>国際宇宙ステーションに滞在した経験を持つ鈴木氏が、宇宙から見た地球の姿と宇宙での生活について語ります。</p>
            <div className="mt-4 text-sm">
              <span className="font-medium">場所:</span> 大学講堂
            </div>
          </div>
          
          <div className="border rounded-lg p-6 bg-card">
            <div className="flex flex-col md:flex-row md:items-center justify-between gap-4 mb-4">
              <div>
                <h3 className="text-xl font-bold">若者へのメッセージ</h3>
                <p className="text-muted-foreground">田中次郎氏（作家・社会活動家）</p>
              </div>
              <div className="bg-primary/10 text-primary px-4 py-2 rounded-full text-sm font-medium">
                3日目 13:00〜14:30
              </div>
            </div>
            <p>ベストセラー作家であり社会活動家でもある田中氏が、変化の激しい時代を生きる若者へのメッセージを届けます。</p>
            <div className="mt-4 text-sm">
              <span className="font-medium">場所:</span> 大学講堂
            </div>
          </div>
        </div>
        
        <h2>参加方法</h2>
        <p>各講演は事前予約制です。以下の方法でお申し込みください。</p>
        <ul>
          <li>大学祭公式ウェブサイトからの予約（各講演の1週間前まで）</li>
          <li>当日空席がある場合は、講演開始30分前から会場前で整理券を配布</li>
        </ul>
        
        <h2>注意事項</h2>
        <ul>
          <li>開演10分前までにご入場ください。遅れた場合は入場をお断りする場合があります</li>
          <li>講演中の写真撮影・録音・録画はご遠慮ください</li>
          <li>講演者の都合により、内容が変更になる場合があります</li>
          <li>会場内での飲食は禁止です</li>
        </ul>
      </div>
    </div>
  );
} 