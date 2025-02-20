import { cn } from '@/../lib/utils/helpers';

interface LogoProps {
  small?: boolean;
  className?: string;
}

export function Logo({ small = false, className }: LogoProps) {
  return (
    <div className={cn('flex items-center', className)}>
      <span className="sr-only">大学祭ロゴ</span>
      {/* SVGでロゴを表示。実際のプロジェクトではImageコンポーネントを使用 */}
      <div className="relative overflow-hidden">
        <svg
          width={small ? "32" : "40"}
          height={small ? "32" : "40"}
          viewBox="0 0 40 40"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
          className="text-[#E84D8A]"
        >
          <path
            fillRule="evenodd"
            clipRule="evenodd"
            d="M20 0C8.954 0 0 8.954 0 20s8.954 20 20 20 20-8.954 20-20S31.046 0 20 0zm-5 10a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h10a2 2 0 0 0 2-2V12a2 2 0 0 0-2-2H15zm1 4a1 1 0 0 1 1-1h6a1 1 0 0 1 1 1v12a1 1 0 0 1-1 1h-6a1 1 0 0 1-1-1V14z"
            fill="currentColor"
          />
        </svg>
      </div>
      <span className={cn("ml-2 font-bold", small ? "text-lg" : "text-xl")}>
        大学祭2025
      </span>
    </div>
  );
}