'use client';

import { useState } from 'react';
import Link from 'next/link';
import { Menu, Search, ChevronRight } from 'lucide-react';
import { Button } from '@/../components/ui/button';
import { ButtonContent } from '@/../components/ui/button-content';
import { Sheet, SheetContent, SheetHeader, SheetTitle, SheetTrigger } from '@/../components/ui/sheet';
import { Input } from '@/../components/ui/input';
import { useRouter } from 'next/navigation';

export function HamburgerMenu() {
  const [isOpen, setIsOpen] = useState(false);
  const [searchTerm, setSearchTerm] = useState('');
  const router = useRouter();

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
        <button className="inline-flex items-center justify-center h-10 w-10 rounded-md text-sm font-medium hover:bg-accent hover:text-accent-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50">
          <Menu className="h-5 w-5" />
        </button>
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
            <Link 
              href="/apply" 
              className="inline-flex items-center justify-center w-full h-10 px-4 py-2 text-sm font-medium text-white bg-[#E84D8A] rounded-md hover:bg-[#E84D8A]/90 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50"
              onClick={handleNavigation}
            >
              参加申し込み
            </Link>
          </div>
        </nav>
      </SheetContent>
    </Sheet>
  );
}