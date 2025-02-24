import { Button } from '@/../components/ui/button';
import { buttonVariants } from '@/../components/ui/button';
import { Calendar, MapPin, Clock } from 'lucide-react';
import Link from 'next/link';

export function HeroSection() {
  return (
    <section className="relative overflow-hidden bg-muted pt-16 md:pt-24 pb-16">
      <div className="container">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div className="space-y-8 text-center lg:text-left">
            <div className="space-y-4">
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold tracking-tighter">
                大学祭2025
                <span className="block text-[#E84D8A]">未来への祭典</span>
              </h1>
              <p className="text-xl text-muted-foreground max-w-[600px] mx-auto lg:mx-0">
                2025年6月1日〜3日に開催される日本最大級の大学祭。学生によるイベント、展示、パフォーマンスをお楽しみください。
              </p>
            </div>

            <div className="flex flex-col sm:flex-row gap-4 sm:gap-6 justify-center lg:justify-start">
              <Link 
                href="/visitor-guidelines"
                className="inline-flex items-center justify-center h-11 px-8 py-2 text-sm font-medium text-white bg-[#E84D8A] rounded-md hover:bg-[#E84D8A]/90 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50"
              >
                来場案内を見る
              </Link>
              <Link 
                href="/timetable"
                className="inline-flex items-center justify-center h-11 px-8 py-2 text-sm font-medium border border-input bg-background hover:bg-accent hover:text-accent-foreground rounded-md focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2"
              >
                タイムテーブルを見る
              </Link>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 text-sm">
              <div className="flex items-center justify-center lg:justify-start space-x-2">
                <Calendar className="h-5 w-5 text-[#E84D8A]" />
                <span>2025年6月1日〜3日</span>
              </div>
              <div className="flex items-center justify-center lg:justify-start space-x-2">
                <Clock className="h-5 w-5 text-[#E84D8A]" />
                <span>10:00〜20:00</span>
              </div>
              <div className="flex items-center justify-center lg:justify-start space-x-2">
                <MapPin className="h-5 w-5 text-[#E84D8A]" />
                <span>東京都XX区YY 1-2-3</span>
              </div>
            </div>
          </div>
          
          <div className="relative h-[400px] lg:h-[500px] bg-gradient-to-br from-purple-50 to-pink-50 rounded-lg overflow-hidden flex items-center justify-center">
            <div className="absolute inset-0 flex items-center justify-center">
              <div className="w-64 h-64 bg-[#E84D8A]/10 rounded-full animate-pulse" />
            </div>
            <div className="relative z-10 text-center">
              <div className="font-bold text-8xl text-[#E84D8A]">2025</div>
              <div className="mt-4 font-medium text-2xl">6.1-6.3</div>
            </div>
          </div>
        </div>
      </div>
      
      {/* 装飾要素 */}
      <div className="absolute top-1/2 left-0 w-24 h-24 bg-[#E84D8A]/10 rounded-full transform -translate-y-1/2 -translate-x-1/2" />
      <div className="absolute bottom-0 right-1/4 w-40 h-40 bg-[#E84D8A]/5 rounded-full transform translate-y-1/2" />
    </section>
  );
}