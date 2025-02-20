'use client';

import { useState } from 'react';
import { useRouter, usePathname } from 'next/navigation';
import { Globe } from 'lucide-react';
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from './dropdown-menu';
import { Button } from './button';

const LANGUAGES = [
  { code: 'ja', label: '日本語', flag: '🇯🇵' },
  { code: 'en', label: 'English', flag: '🇬🇧' },
  { code: 'zh', label: '中文', flag: '🇨🇳' },
];

export function LanguageSwitcher() {
  const [isOpen, setIsOpen] = useState(false);
  const router = useRouter();
  const pathname = usePathname();
  
  // 現在の言語を判定 (URLから)
  const getCurrentLanguage = () => {
    const pathSegments = pathname.split('/');
    // URLの最初のセグメントが言語コードかチェック
    const currentLangCode = LANGUAGES.find(lang => 
      pathSegments[1] === lang.code
    )?.code;
    
    return currentLangCode || 'ja'; // デフォルトは日本語
  };
  
  const currentLang = getCurrentLanguage();
  
  const handleLanguageChange = (langCode: string) => {
    // 現在のパスから言語部分を除去
    let pathWithoutLang = pathname;
    const pathSegments = pathname.split('/');
    
    if (LANGUAGES.some(lang => lang.code === pathSegments[1])) {
      // 既に言語コードがある場合は置き換え
      pathSegments[1] = langCode;
      pathWithoutLang = pathSegments.join('/');
    } else if (langCode !== 'ja') {
      // 日本語以外の場合は言語コードを追加
      pathWithoutLang = `/${langCode}${pathname}`;
    }
    
    // 日本語はデフォルトなのでURLに言語コードを含めない
    if (langCode === 'ja' && pathSegments[1] === 'ja') {
      pathWithoutLang = pathname.replace(/^\/ja/, '');
    }
    
    router.push(pathWithoutLang);
    setIsOpen(false);
  };

  return (
    <DropdownMenu open={isOpen} onOpenChange={setIsOpen}>
      <DropdownMenuTrigger asChild>
        <Button variant="ghost" size="icon" aria-label="言語を選択">
          <span className="flex items-center justify-center">
            <Globe className="h-5 w-5" />
          </span>
        </Button>
      </DropdownMenuTrigger>
      <DropdownMenuContent align="end">
        {LANGUAGES.map((language) => (
          <DropdownMenuItem
            key={language.code}
            className={`cursor-pointer ${
              currentLang === language.code ? 'bg-muted' : ''
            }`}
            onClick={() => handleLanguageChange(language.code)}
          >
            <span className="mr-2">{language.flag}</span>
            {language.label}
          </DropdownMenuItem>
        ))}
      </DropdownMenuContent>
    </DropdownMenu>
  );
}