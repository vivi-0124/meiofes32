'use client';

import Link from 'next/link';
import { FooterLinks } from '@/../components/common/footer/footer-links';
import { SponsorsShowcase } from '@/../components/common/footer/sponsors-showcase';
import { Button } from '@/../components/ui/button';
import { ArrowUp } from 'lucide-react';

export function Footer() {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="bg-muted">
      <div className="container">
      <SponsorsShowcase />
        <div className="py-10 md:py-16">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10">
            <div className="space-y-4">
              <h2 className="text-lg font-semibold">大学祭2025</h2>
              <p className="text-sm text-muted-foreground">
                大学祭2025は、学生が主体となって運営する日本最大級の大学祭です。
                様々な催し物やイベントを通じて、大学の魅力を発信します。
              </p>
              <div className="flex space-x-4">
                <a 
                  href="https://twitter.com" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  aria-label="Twitter"
                  className="text-muted-foreground hover:text-primary"
                >
                  <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-twitter"><path d="M22 4s-.7 2.1-2 3.4c1.6 10-9.4 17.3-18 11.6 2.2.1 4.4-.6 6-2C3 15.5.5 9.6 3 5c2.2 2.6 5.6 4.1 9 4-.9-4.2 4-6.6 7-3.8 1.1 0 3-1.2 3-1.2z"/></svg>
                </a>
                <a 
                  href="https://instagram.com" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  aria-label="Instagram"
                  className="text-muted-foreground hover:text-primary"
                >
                  <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-instagram"><rect width="20" height="20" x="2" y="2" rx="5" ry="5"/><path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"/><line x1="17.5" x2="17.51" y1="6.5" y2="6.5"/></svg>
                </a>
                <a 
                  href="https://youtube.com" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  aria-label="YouTube"
                  className="text-muted-foreground hover:text-primary"
                >
                  <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-youtube"><path d="M2.5 17a24.12 24.12 0 0 1 0-10 2 2 0 0 1 1.4-1.4 49.56 49.56 0 0 1 16.2 0A2 2 0 0 1 21.5 7a24.12 24.12 0 0 1 0 10 2 2 0 0 1-1.4 1.4 49.55 49.55 0 0 1-16.2 0A2 2 0 0 1 2.5 17"/><path d="m10 15 5-3-5-3z"/></svg>
                </a>
              </div>
            </div>
            
            <FooterLinks />
            
            <div className="space-y-4">
              <h2 className="text-lg font-semibold">お問い合わせ</h2>
              <ul className="space-y-2 text-sm">
                <li>
                  <span className="font-medium">メール:</span> info@festival.example.ac.jp
                </li>
                <li>
                  <span className="font-medium">電話:</span> 03-1234-5678
                </li>
                <li>
                  <span className="font-medium">受付時間:</span> 平日 10:00〜17:00
                </li>
                <li>
                  <span className="font-medium">住所:</span> 〒123-4567 東京都XX区YY 1-2-3
                </li>
              </ul>
            </div>
            
            <div className="space-y-4">
              <h2 className="text-lg font-semibold">ニュースレター登録</h2>
              <p className="text-sm text-muted-foreground">
                最新情報をメールでお届けします。
              </p>
              <form className="space-y-2">
                <input
                  type="email"
                  placeholder="メールアドレス"
                  className="w-full px-3 py-2 text-sm rounded-md border border-input"
                  required
                />
                <Button type="submit" className="w-full">登録する</Button>
              </form>
            </div>
          </div>
        </div>
        
        
        
        <div className="py-6 border-t border-border">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4">
            <div className="text-sm text-muted-foreground">
              &copy; {new Date().getFullYear()} 大学祭実行委員会. All rights reserved.
            </div>
            <div className="flex flex-wrap gap-x-6 gap-y-2 text-sm">
              <Link href="/privacy-policy" className="hover:underline">
                プライバシーポリシー
              </Link>
              <Link href="/cookie-policy" className="hover:underline">
                Cookie ポリシー
              </Link>
              <Link href="/accessibility" className="hover:underline">
                アクセシビリティ
              </Link>
              <Link href="/sitemap" className="hover:underline">
                サイトマップ
              </Link>
            </div>
            <Button
              variant="outline"
              size="icon"
              onClick={scrollToTop}
              aria-label="ページトップへ戻る"
              className="rounded-full"
            >
              <ArrowUp className="h-4 w-4" />
            </Button>
          </div>
        </div>
      </div>
    </footer>
  );
}