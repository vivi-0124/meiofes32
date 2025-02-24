import { ArrowLeft } from 'lucide-react';
import Link from 'next/link';
import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'ゲーム大会 | 大学祭2025',
  description: 'eスポーツ大会や伝統的なゲーム企画。友達と参加して優勝を目指そう！',
};

export default function GamesPage() {
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
        ゲーム大会
      </h1>
      
      <div className="w-full h-64 md:h-96 bg-gradient-to-br from-purple-500/20 to-indigo-500/20 rounded-lg mb-8 flex items-center justify-center">
        <svg xmlns="http://www.w3.org/2000/svg" width="64" height="64" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-purple-500">
          <rect width="20" height="12" x="2" y="6" rx="2"></rect>
          <path d="M12 12h.01"></path>
          <path d="M17 12h.01"></path>
          <path d="M7 12h.01"></path>
        </svg>
      </div>
      
      <div className="prose prose-lg max-w-none">
        <p className="lead">eスポーツ大会や伝統的なゲーム企画。友達と参加して優勝を目指そう！</p>
        
        <h2>開催場所</h2>
        <p>第3教育棟1階多目的ホール、中央広場</p>
        
        <h2>開催時間</h2>
        <p>
          1日目: 10:00〜18:00<br />
          2日目: 10:00〜18:00<br />
          3日目: 10:00〜16:00
        </p>
        
        <h2>主な大会・イベント</h2>
        
        <div className="not-prose grid grid-cols-1 md:grid-cols-2 gap-6 my-8">
          <div className="border rounded-lg overflow-hidden">
            <div className="bg-purple-500/10 p-4">
              <h3 className="text-xl font-bold text-purple-700">eスポーツ大会</h3>
            </div>
            <div className="p-4">
              <p className="mb-4">人気ゲームタイトルを使った対戦大会。個人戦・チーム戦あり。</p>
              <ul className="space-y-2 text-sm">
                <li className="flex justify-between">
                  <span>「Battle Legends」トーナメント</span>
                  <span className="font-medium">1日目 13:00〜</span>
                </li>
                <li className="flex justify-between">
                  <span>「Racing GT」タイムアタック</span>
                  <span className="font-medium">2日目 10:30〜</span>
                </li>
                <li className="flex justify-between">
                  <span>「Strategy Masters」チーム戦</span>
                  <span className="font-medium">2日目 14:00〜</span>
                </li>
                <li className="flex justify-between">
                  <span>「Fighting Arena」トーナメント</span>
                  <span className="font-medium">3日目 11:00〜</span>
                </li>
              </ul>
              <div className="mt-4 text-sm">
                <span className="font-medium">場所:</span> 第3教育棟1階多目的ホール
              </div>
            </div>
          </div>
          
          <div className="border rounded-lg overflow-hidden">
            <div className="bg-indigo-500/10 p-4">
              <h3 className="text-xl font-bold text-indigo-700">レトロゲームコーナー</h3>
            </div>
            <div className="p-4">
              <p className="mb-4">懐かしの名作ゲームが勢揃い。自由に遊べるフリープレイエリア。</p>
              <ul className="space-y-2 text-sm">
                <li>80年代〜90年代の名作アーケードゲーム</li>
                <li>歴代家庭用ゲーム機コレクション</li>
                <li>レトロゲームの歴史展示</li>
                <li>ハイスコア大会（随時開催）</li>
              </ul>
              <div className="mt-4 text-sm">
                <span className="font-medium">場所:</span> 第3教育棟1階多目的ホール
              </div>
            </div>
          </div>
          
          <div className="border rounded-lg overflow-hidden">
            <div className="bg-blue-500/10 p-4">
              <h3 className="text-xl font-bold text-blue-700">ボードゲーム大会</h3>
            </div>
            <div className="p-4">
              <p className="mb-4">戦略性の高いボードゲームの対戦大会。初心者から上級者まで楽しめます。</p>
              <ul className="space-y-2 text-sm">
                <li className="flex justify-between">
                  <span>「カタン」トーナメント</span>
                  <span className="font-medium">1日目 11:00〜</span>
                </li>
                <li className="flex justify-between">
                  <span>「ドミニオン」大会</span>
                  <span className="font-medium">2日目 13:00〜</span>
                </li>
                <li className="flex justify-between">
                  <span>「カルカソンヌ」対戦会</span>
                  <span className="font-medium">3日目 10:30〜</span>
                </li>
              </ul>
              <div className="mt-4 text-sm">
                <span className="font-medium">場所:</span> 第3教育棟1階多目的ホール
              </div>
            </div>
          </div>
          
          <div className="border rounded-lg overflow-hidden">
            <div className="bg-pink-500/10 p-4">
              <h3 className="text-xl font-bold text-pink-700">伝統ゲーム広場</h3>
            </div>
            <div className="p-4">
              <p className="mb-4">日本の伝統的な遊びを体験できるコーナー。家族連れにもおすすめ。</p>
              <ul className="space-y-2 text-sm">
                <li>けん玉チャレンジ</li>
                <li>百人一首大会（2日目 15:00〜）</li>
                <li>だるま落とし対決</li>
                <li>射的コーナー</li>
                <li>ヨーヨーつり</li>
              </ul>
              <div className="mt-4 text-sm">
                <span className="font-medium">場所:</span> 中央広場
              </div>
            </div>
          </div>
        </div>
        
        <h2>参加方法</h2>
        <p>各大会の参加方法は以下の通りです：</p>
        <ul>
          <li>eスポーツ大会：事前予約制（大学祭公式サイトから）または当日受付（定員あり）</li>
          <li>レトロゲームコーナー：自由参加</li>
          <li>ボードゲーム大会：当日受付（各大会開始1時間前から）</li>
          <li>伝統ゲーム広場：自由参加（一部イベントは整理券配布）</li>
        </ul>
        
        <h2>賞品</h2>
        <p>各大会の優勝者・入賞者には豪華賞品をご用意しています！</p>
        <ul>
          <li>eスポーツ大会優勝：ゲーミングデバイスセット</li>
          <li>ボードゲーム大会優勝：ボードゲーム詰め合わせ</li>
          <li>各種チャレンジ成功者：オリジナルグッズ</li>
        </ul>
        
        <h2>注意事項</h2>
        <ul>
          <li>混雑時は入場制限を行う場合があります</li>
          <li>貴重品は各自で管理してください</li>
          <li>機材の取り扱いには十分ご注意ください</li>
          <li>会場内での飲食は指定エリアでのみ可能です</li>
        </ul>
      </div>
    </div>
  );
} 