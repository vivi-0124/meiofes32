import Link from 'next/link';
import { buttonVariants } from '@/../components/ui/button';
import { ChevronRight } from 'lucide-react';
import { cn } from '@/../lib/utils/helpers';

const visitorLinks = [
  { href: '/visitor-guidelines', label: 'ご来場案内' },
  { href: '/timetable', label: 'タイムテーブル' },
  { href: '/campus-map', label: 'キャンパスマップ' },
  { href: '/access', label: 'アクセス' },
  { href: '/pamphlet', label: 'デジタルパンフレット' },
  { href: '/faq', label: 'よくある質問' },
];

export default function VisitorInfoLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div className="bg-muted/30">
      {/* ナビゲーションブレッドクラム */}
      <div className="bg-muted">
        <div className="container py-3">
          <nav className="text-sm text-muted-foreground" aria-label="パンくずリスト">
            <ol className="flex items-center space-x-1">
              <li>
                <Link href="/" className="hover:text-foreground">
                  トップ
                </Link>
              </li>
              <li>
                <ChevronRight className="h-4 w-4" />
              </li>
              <li>
                ご来場の方へ
              </li>
            </ol>
          </nav>
        </div>
      </div>

      {/* サブナビゲーション */}
      <div className="container pt-3 pb-0">
        <div className="flex items-center space-x-1 overflow-x-auto pb-3 scrollbar-hide">
          {visitorLinks.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className={cn(
                buttonVariants({ variant: 'ghost', size: 'sm' }),
                'whitespace-nowrap'
              )}
            >
              {link.label}
            </Link>
          ))}
        </div>
      </div>

      {/* メインコンテンツ */}
      {children}
    </div>
  );
}