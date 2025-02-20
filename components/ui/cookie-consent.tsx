'use client';

import { useState, useEffect } from 'react';
import { Button } from './button';
import { X } from 'lucide-react';
import Link from 'next/link';

export function CookieConsent() {
  const [isVisible, setIsVisible] = useState(false);
  const [isMounted, setIsMounted] = useState(false);

  useEffect(() => {
    setIsMounted(true);
    const hasConsent = localStorage.getItem('cookieConsent');
    if (!hasConsent) {
      // 少し遅延させて表示（ページ読み込み直後の表示を避ける）
      const timer = setTimeout(() => {
        setIsVisible(true);
      }, 1000);
      return () => clearTimeout(timer);
    }
  }, []);

  if (!isMounted) {
    return null;
  }

  const acceptAll = () => {
    localStorage.setItem('cookieConsent', 'all');
    setIsVisible(false);
  };

  const acceptEssential = () => {
    localStorage.setItem('cookieConsent', 'essential');
    setIsVisible(false);
  };

  if (!isVisible) return null;

  return (
    <div className="fixed bottom-0 left-0 right-0 bg-background border-t z-50 p-4 md:p-6 shadow-lg">
      <div className="container flex flex-col md:flex-row items-center justify-between gap-4">
        <div className="flex-1 text-center md:text-left">
          <h3 className="text-lg font-semibold mb-2">Cookieの使用について</h3>
          <p className="text-sm text-muted-foreground">
            当サイトではCookieを使用してユーザー体験を向上させています。
            詳しくは
            <Link href="/cookie-policy" className="text-primary hover:underline">
              Cookieポリシー
            </Link>
            をご覧ください。
          </p>
        </div>
        <div className="flex gap-3 md:gap-4">
          <Button
            variant="outline"
            size="sm"
            onClick={acceptEssential}
          >
            必要なCookieのみ
          </Button>
          <Button
            variant="festival"
            size="sm"
            onClick={acceptAll}
          >
            すべて許可
          </Button>
          <Button
            variant="ghost" 
            size="icon"
            className="h-8 w-8 md:hidden"
            onClick={acceptAll}
            aria-label="閉じる"
          >
            <X className="h-4 w-4" />
          </Button>
        </div>
      </div>
    </div>
  );
}