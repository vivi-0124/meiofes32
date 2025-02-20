import Link from 'next/link';
import { Button } from '@/../components/ui/button';
import { NewsCard } from '@/../components/feature/news/news-card';
import { ArrowRight } from 'lucide-react';

// モックニュースデータ
const newsItems = [
  {
    id: '1',
    title: '「第75回大学祭」テーマが「未来への祭典」に決定しました',
    excerpt: '今年度の大学祭のテーマが正式に決定。様々な企画で大学の未来像を探ります。',
    date: '2025-01-15',
    category: '重要なお知らせ',
    image: null,
  },
  {
    id: '2',
    title: '参加団体募集を開始しました（2025年2月1日締切）',
    excerpt: '教室企画、屋外ステージ、模擬店の参加申し込みを受付中。詳細は参加者向けページをご確認ください。',
    date: '2025-01-10',
    category: '参加者向け',
    image: null,
  },
  {
    id: '3',
    title: '特別ゲストとして人気アーティスト「STELLAR」の出演が決定',
    excerpt: '大学祭最終日に特別ゲストとして人気グループ「STELLAR」をお迎えすることが決定しました。',
    date: '2025-01-05',
    category: 'イベント情報',
    image: null,
  },
];

export function NewsSection() {
  return (
    <section className="py-16 md:py-24 bg-muted/30">
      <div className="container">
        <div className="flex flex-col md:flex-row justify-between items-center mb-12">
          <div>
            <h2 className="text-3xl font-bold tracking-tight mb-2">最新情報</h2>
            <p className="text-muted-foreground">大学祭に関する最新のお知らせをチェックしよう</p>
          </div>
          <Button variant="outline" className="mt-4 md:mt-0" asChild>
            <Link href="/news" className="flex items-center">
              お知らせ一覧
              <ArrowRight className="ml-2 h-4 w-4" />
            </Link>
          </Button>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {newsItems.map((news) => (
            <NewsCard key={news.id} news={news} />
          ))}
        </div>
      </div>
    </section>
  );
}