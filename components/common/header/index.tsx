import Link from 'next/link';
import { Logo } from "./logo";
import { SearchBar } from "@/../components/common/header/search-bar";
import { HamburgerMenu } from "@/../components/common/header/hamburger-menu";
import { LanguageSwitcher } from "@/../components/ui/language-switcher";

export function Header() {
  return (
    <header className="sticky top-0 z-40 w-full border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
      <div className="container flex h-14 items-center">
        <div className="flex gap-6 md:gap-10 items-center">
          <Link href="/" className="hidden md:block">
            <Logo />
          </Link>
          <Link href="/" className="flex md:hidden">
            <Logo small />
          </Link>
        </div>
        
        <div className="flex flex-1 items-center justify-end space-x-4">
          <div className="flex">
            <SearchBar />
          </div>
          <LanguageSwitcher />
          <HamburgerMenu />
        </div>
      </div>
    </header>
  );
}