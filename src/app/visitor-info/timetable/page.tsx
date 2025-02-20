import { Metadata } from 'next';
import { ScheduleDisplay } from '@/app/visitor-info/timetable/components/schedule-display';
import { Button } from '@/../components/ui/button';
import { Download, Printer } from 'lucide-react';
export const metadata: Metadata = {
  title: 'タイムテーブル - 大学祭2025',
  description: '大学祭の全イベントスケジュール。3日間の時間帯ごとのプログラムが確認できます。',
};

export default function TimetablePage() {
  return (
    <div className="container py-12">
      <div className="max-w-5xl mx-auto">
        <div className="text-center mb-12">
          <h1 className="text-4xl font-bold tracking-tight mb-4">タイムテーブル</h1>
          <p className="text-xl text-muted-foreground">
            3日間のイベントスケジュールをご確認いただけます
          </p>
        </div>
        
        <div className="flex justify-end gap-4 mb-8">
          <Button variant="outline" size="sm" className="flex items-center gap-2">
            <Download className="h-4 w-4" />
            PDFダウンロード
          </Button>
          <Button variant="outline" size="sm" className="flex items-center gap-2">
            <Printer className="h-4 w-4" />
            印刷する
          </Button>
        </div>
        
        {/* スケジュール表示コンポーネント */}
        <ScheduleDisplay />
        
        <div className="mt-12 space-y-8">
          <section>
            <h2 className="text-2xl font-semibold mb-4">注意事項</h2>
            <div className="space-y-4 text-muted-foreground">
              <p>
                • プログラムは予告なく変更される場合があります。最新情報は会場内の案内板またはアプリでご確認ください。
              </p>
              <p>
                • 混雑が予想されるイベントは開始30分前までにお越しいただくことをお勧めします。
              </p>
              <p>
                • 荒天時は屋外イベントが中止または変更となる場合があります。
              </p>
              <p>
                • 各イベント会場の収容人数には限りがあります。満員の場合は入場をお断りすることがあります。
              </p>
            </div>
          </section>
          
          <section>
            <h2 className="text-2xl font-semibold mb-4">カテゴリ説明</h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
              <div className="bg-muted p-4 rounded-lg">
                <div className="flex items-center gap-2 mb-2">
                  <div className="w-4 h-4 bg-[#E84D8A] rounded-full"></div>
                  <h3 className="font-medium">メインイベント</h3>
                </div>
                <p className="text-sm text-muted-foreground">大学祭のメインとなる特別企画やセレモニー</p>
              </div>
              <div className="bg-muted p-4 rounded-lg">
                <div className="flex items-center gap-2 mb-2">
                  <div className="w-4 h-4 bg-blue-500 rounded-full"></div>
                  <h3 className="font-medium">パフォーマンス</h3>
                </div>
                <p className="text-sm text-muted-foreground">音楽ライブ、ダンス、演劇などのステージパフォーマンス</p>
              </div>
              <div className="bg-muted p-4 rounded-lg">
                <div className="flex items-center gap-2 mb-2">
                  <div className="w-4 h-4 bg-green-500 rounded-full"></div>
                  <h3 className="font-medium">トークショー</h3>
                </div>
                <p className="text-sm text-muted-foreground">ゲストによるトークイベントやパネルディスカッション</p>
              </div>
              <div className="bg-muted p-4 rounded-lg">
                <div className="flex items-center gap-2 mb-2">
                  <div className="w-4 h-4 bg-purple-500 rounded-full"></div>
                  <h3 className="font-medium">展示・体験</h3>
                </div>
                <p className="text-sm text-muted-foreground">研究発表や展示企画、体験型アクティビティ</p>
              </div>
              <div className="bg-muted p-4 rounded-lg">
                <div className="flex items-center gap-2 mb-2">
                  <div className="w-4 h-4 bg-orange-500 rounded-full"></div>
                  <h3 className="font-medium">コンテスト</h3>
                </div>
                <p className="text-sm text-muted-foreground">各種コンペティションやゲーム大会</p>
              </div>
              <div className="bg-muted p-4 rounded-lg">
                <div className="flex items-center gap-2 mb-2">
                  <div className="w-4 h-4 bg-yellow-500 rounded-full"></div>
                  <h3 className="font-medium">飲食</h3>
                </div>
                <p className="text-sm text-muted-foreground">フードイベントや模擬店の特別企画</p>
              </div>
            </div>
          </section>
        </div>
      </div>
    </div>
  );
}