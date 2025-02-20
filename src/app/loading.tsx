import { Skeleton } from '@/../components/ui/loading-spinner';

export default function Loading() {
  return (
    <div className="container py-12 space-y-8">
      {/* Hero section skeleton */}
      <div className="w-full h-[500px] rounded-lg bg-muted animate-pulse" />
      
      {/* News section skeleton */}
      <div className="space-y-4">
        <Skeleton className="h-10 w-1/4" />
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {Array(3).fill(null).map((_, i) => (
            <div key={i} className="space-y-3">
              <Skeleton className="h-40 w-full rounded-lg" />
              <Skeleton className="h-6 w-3/4" />
              <Skeleton className="h-4 w-full" />
              <Skeleton className="h-4 w-2/3" />
            </div>
          ))}
        </div>
      </div>
      
      {/* Content section skeleton */}
      <div className="space-y-4">
        <Skeleton className="h-10 w-1/3" />
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
          {Array(4).fill(null).map((_, i) => (
            <Skeleton key={i} className="h-32 w-full rounded-lg" />
          ))}
        </div>
      </div>
      
      {/* Schedule section skeleton */}
      <div className="space-y-4">
        <Skeleton className="h-10 w-1/4" />
        <div className="space-y-2">
          {Array(5).fill(null).map((_, i) => (
            <Skeleton key={i} className="h-16 w-full rounded-md" />
          ))}
        </div>
      </div>
      
      <div className="sr-only" aria-live="polite">
        ページを読み込み中です...
      </div>
    </div>
  );
}