import Link from 'next/link';
import { Metadata } from 'next';
import { buttonVariants } from '@/../components/ui/button';
import { ArrowLeft } from 'lucide-react';

export const metadata: Metadata = {
  title: 'Page Not Found | 404',
  description: 'The page you are looking for does not exist.',
};

export default function NotFound() {
  return (
    <div className="container flex flex-col items-center justify-center h-[70vh] gap-8 text-center">
      <div className="space-y-6">
        <h1 className="text-4xl font-bold tracking-tighter sm:text-6xl md:text-7xl">404</h1>
        <h2 className="text-3xl font-semibold tracking-tight">ページが見つかりません</h2>
        <p className="max-w-md mx-auto text-lg text-muted-foreground">
          お探しのページは存在しないか、移動された可能性があります。
        </p>
      </div>
      <Link 
        href="/" 
        className={buttonVariants({ variant: 'default', size: 'lg' })}
      >
        <ArrowLeft className="w-5 h-5 mr-2" />
        トップページに戻る
      </Link>
    </div>
  );
}