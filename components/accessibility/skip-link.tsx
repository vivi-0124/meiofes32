'use client';

import { useEffect, useState } from "react";
import { cn } from "@/../lib/utils/helpers";

export function SkipLink() {
  const [isFocused, setIsFocused] = useState(false);

  // キーボードユーザーがTabキーを使うとここにフォーカスが当たる
  const handleFocus = () => setIsFocused(true);
  const handleBlur = () => setIsFocused(false);
  
  // リンククリック時にフォーカスを移動する
  const handleClick = (e: React.MouseEvent<HTMLAnchorElement>) => {
    e.preventDefault();
    const mainContent = document.getElementById('main-content');
    if (mainContent) {
      mainContent.tabIndex = -1;
      mainContent.focus();
      // フォーカス後にtabindexを戻す（不要なフォーカスリングを避けるため）
      setTimeout(() => {
        mainContent.removeAttribute('tabindex');
      }, 100);
    }
  };

  // キーボードリスナーでEscキーでフォーカスを外せるようにする
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape' && isFocused) {
        setIsFocused(false);
        document.body.focus();
      }
    };

    document.addEventListener('keydown', handleKeyDown);
    return () => document.removeEventListener('keydown', handleKeyDown);
  }, [isFocused]);

  return (
    <a
      href="#main-content"
      onClick={handleClick}
      onFocus={handleFocus}
      onBlur={handleBlur}
      className={cn(
        'absolute z-50 left-4 p-2 bg-primary text-primary-foreground rounded focus:outline-none transition-transform duration-200 transform',
        isFocused ? 'translate-y-4' : '-translate-y-full'
      )}
    >
      メインコンテンツへスキップ
    </a>
  );
}