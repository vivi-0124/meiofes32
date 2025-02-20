'use client';

import { useState, useEffect } from 'react';
import Link from 'next/link';
import { Menu, Search, ChevronRight } from 'lucide-react';
import { Button } from '@/../components/ui/button';
import { Sheet, SheetContent, SheetHeader, SheetTitle, SheetTrigger } from '@/../components/ui/sheet';
import { Input } from '@/../components/ui/input';
import { useRouter } from 'next/navigation';

export function HamburgerMenu() {
  const [isOpen, setIsOpen] = useState(false);
  const [isMounted, setIsMounted] = useState(false);
  const [searchTerm, setSearchTerm] = useState('');
  const router = useRouter();

  useEffect(() => {
    setIsMounted(true);
  }, []);

  if (!isMounted) {
    return null;
  }

  const handleSearch = (e: React.FormEvent) => {
    e.preventDefault();
    if (searchTerm.trim()) {
      router.push(`/search?q=${encodeURIComponent(searchTerm.trim())}`);
      setIsOpen(false);
    }
  };

  const handleNavigation = () => {
    setIsOpen(false);
  };

  const menuItems = [
    { label: 'ご来場の方へ', href: '/visitor-guidelines' },
    { label: 'タイムテーブル', href: '/timetable' },
    { label: 'キャンパスマップ', href: '/campus-map' },
    { label: 'アクセス', href: '/access' },
    { label: 'デジタルパンフレット', href: '/pamphlet' },
    { label: 'よくある質問', href: '/faq' },
    { label: '参加者向け情報', href: '/information' },
    { label: 'スポンサー', href: '/sponsors' },
  ];

  return (
    <Sheet open={isOpen} onOpenChange={setIsOpen}>
      <SheetTrigger asChild>
        <Button variant="ghost" size="icon" className="flex items-center gap-2">
          <Menu className="h-5 w-5" />
          <span className="hidden md:inline text-sm font-medium">メニュー</span>
          <span className="sr-only">メニューを開く</span>
        </Button>
      </SheetTrigger>
      <SheetContent side="right" className="w-[85vw] sm:w-[385px] pr-0">
        <SheetHeader>
          <SheetTitle className="text-left">メニュー</SheetTitle>
        </SheetHeader>
        <div className="py-4">
          <form onSubmit={handleSearch} className="relative">
            <Input
              type="search"
              placeholder="検索..."
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              className="pr-10"
            />
            <Button
              type="submit"
              variant="ghost"
              size="icon"
              className="absolute right-0 top-0 h-full aspect-square"
              aria-label="検索"
            >
              <Search className="h-4 w-4" />
            </Button>
          </form>
        </div>
        <nav className="space-y-2 pr-6">
          {menuItems.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              onClick={handleNavigation}
              className="flex items-center justify-between py-2 text-base hover:text-primary border-b border-muted transition-colors"
            >
              {item.label}
              <ChevronRight className="h-4 w-4" />
            </Link>
          ))}
          <div className="pt-4">
            <Button
              variant="festival"
              className="w-full"
              onClick={handleNavigation}
              asChild
            >
              <Link href="/apply">
                <span className="flex items-center justify-center">
                  参加申し込み
                </span>
              </Link>
            </Button>
          </div>
        </nav>
      </SheetContent>
    </Sheet>
  );
}