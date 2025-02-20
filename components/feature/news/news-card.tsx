import Link from 'next/link';
import { Card, CardContent, CardFooter, CardHeader } from '@/../components/ui/card';
import { Badge } from '@/../components/ui/badge';
import { formatDate } from '@/../lib/utils/helpers';
import { CalendarIcon } from 'lucide-react';

interface NewsItem {
  id: string;
  title: string;
  excerpt: string;
  date: string;
  category: string;
  image: string | null;
}

interface NewsCardProps {
  news: NewsItem;
}

export function NewsCard({ news }: NewsCardProps) {
  // カテゴリによってバッジの色を変更
  const getBadgeVariant = (category: string) => {
    switch (category) {
      case '重要なお知らせ':
        return 'destructive';
      case '参加者向け':
        return 'default';
      case 'イベント情報':
        return 'secondary';
      default:
        return 'outline';
    }
  };

  return (
    <Link href={`/news/${news.id}`}>
      <Card className="h-full overflow-hidden hover:shadow-md transition-shadow">
        {news.image ? (
          <div className="w-full aspect-video relative overflow-hidden">
            <div 
              className="w-full h-full bg-muted"
              style={{
                backgroundImage: news.image ? `url(${news.image})` : undefined,
                backgroundSize: 'cover',
                backgroundPosition: 'center',
              }}
            />
          </div>
        ) : (
          <div className="w-full aspect-video bg-gradient-to-r from-muted/50 to-muted flex items-center justify-center">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="40"
              height="40"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="1"
              strokeLinecap="round"
              strokeLinejoin="round"
              className="text-muted-foreground/50"
            >
              <rect width="18" height="18" x="3" y="3" rx="2" ry="2" />
              <circle cx="9" cy="9" r="2" />
              <path d="m21 15-3.086-3.086a2 2 0 0 0-2.828 0L6 21" />
            </svg>
          </div>
        )}
        
        <CardHeader className="p-4 pb-2">
          <div className="flex flex-wrap items-center gap-2 mb-2">
            <Badge variant={getBadgeVariant(news.category)}>
              {news.category}
            </Badge>
            <span className="text-xs text-muted-foreground flex items-center">
              <CalendarIcon className="h-3 w-3 mr-1" />
              {formatDate(news.date)}
            </span>
          </div>
          <h3 className="font-semibold line-clamp-2 hover:text-primary transition-colors">
            {news.title}
          </h3>
        </CardHeader>
        
        <CardContent className="p-4 pt-0">
          <p className="text-sm text-muted-foreground line-clamp-3">
            {news.excerpt}
          </p>
        </CardContent>
        
        <CardFooter className="p-4 pt-0">
          <span className="text-sm font-medium text-primary">
            続きを読む
          </span>
        </CardFooter>
      </Card>
    </Link>
  );
}