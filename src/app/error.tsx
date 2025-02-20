'use client';
import { useEffect } from 'react';
import { buttonVariants } from '@/../components/ui/button';
import { AlertCircle, RefreshCw } from 'lucide-react';

export default function Error({
  error,
  reset,
}: {
  error: Error & { digest?: string };
  reset: () => void;
}) {
  useEffect(() => {
    // Send to error reporting service
    console.error(error);
  }, [error]);

  return (
    <div className="container flex flex-col items-center justify-center h-[70vh] gap-8 text-center">
      <div className="space-y-6">
        <div className="flex justify-center">
          <AlertCircle className="w-16 h-16 text-destructive" />
        </div>
        <h1 className="text-3xl font-semibold tracking-tight">エラーが発生しました</h1>
        <p className="max-w-md mx-auto text-lg text-muted-foreground">
          申し訳ありませんが、問題が発生しました。しばらくしてからもう一度お試しください。
        </p>
        {error.digest && (
          <p className="text-sm text-muted-foreground">
            エラーID: {error.digest}
          </p>
        )}
      </div>
      <button
        onClick={reset}
        className={buttonVariants({ variant: 'default', size: 'lg' })}
      >
        <RefreshCw className="w-5 h-5 mr-2" />
        再読み込み
      </button>
    </div>
  );
}