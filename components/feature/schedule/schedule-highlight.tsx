'use client';

import { useState } from 'react';
import { Tabs, TabsList, TabsTrigger, TabsContent } from '@/../components/ui/tabs';
import { ScheduleDay } from '@/../components/feature/schedule/schedule-day';
import { Button } from '@/../components/ui/button';
import Link from 'next/link';
import { ArrowRight } from 'lucide-react';

// モックデータ
const scheduleData = {
  day1: [
    { time: '10:00', title: 'オープニングセレモニー', location: 'メインステージ', category: 'メイン' },
    { time: '11:30', title: '軽音楽部ライブ', location: '屋外ステージA', category: 'パフォーマンス' },
    { time: '13:00', title: '研究室公開「AI最前線」', location: '工学部棟3F', category: '展示' },
    { time: '15:00', title: 'ダンスパフォーマンス', location: '体育館', category: 'パフォーマンス' },
    { time: '17:00', title: 'ゲストアーティストライブ', location: 'メインステージ', category: 'メイン' },
  ],
  day2: [
    { time: '10:30', title: '模擬店オープン', location: '中央広場', category: '飲食' },
    { time: '12:00', title: '学術シンポジウム', location: '大講堂', category: 'アカデミック' },
    { time: '14:30', title: 'お笑いライブ', location: '小講堂', category: 'パフォーマンス' },
    { time: '16:00', title: 'プログラミングコンテスト', location: '情報科学棟', category: 'コンテスト' },
    { time: '18:30', title: '花火大会', location: 'グラウンド', category: 'メイン' },
  ],
  day3: [
    { time: '10:00', title: '卒業生トークセッション', location: '同窓会ホール', category: 'トーク' },
    { time: '11:30', title: '文化部展示ツアー', location: '芸術棟', category: '展示' },
    { time: '13:30', title: 'スポーツ大会決勝', location: 'グラウンド', category: 'スポーツ' },
    { time: '15:30', title: 'STELLAR特別ライブ', location: 'メインステージ', category: 'メイン' },
    { time: '18:00', title: 'クロージングセレモニー', location: 'メインステージ', category: 'メイン' },
  ],
};

export function ScheduleHighlight() {
  const [activeDay, setActiveDay] = useState('day1');

  return (
    <section className="py-16 md:py-24 bg-background">
      <div className="container">
        <div className="flex flex-col md:flex-row justify-between items-center mb-8">
          <div>
            <h2 className="text-3xl font-bold tracking-tight mb-2">イベントスケジュール</h2>
            <p className="text-muted-foreground">3日間で行われる主要イベントのスケジュール</p>
          </div>
          <Button variant="outline" className="mt-4 md:mt-0" asChild>
            <Link href="/timetable">
              <span>詳細スケジュール</span>
              <ArrowRight className="ml-2 h-4 w-4" />
            </Link>
          </Button>
        </div>

        <Tabs defaultValue="day1" className="w-full" onValueChange={setActiveDay}>
          <TabsList className="grid w-full grid-cols-3 mb-8">
            <TabsTrigger value="day1">6月1日 (1日目)</TabsTrigger>
            <TabsTrigger value="day2">6月2日 (2日目)</TabsTrigger>
            <TabsTrigger value="day3">6月3日 (3日目)</TabsTrigger>
          </TabsList>
          <TabsContent value="day1">
            <ScheduleDay events={scheduleData.day1} />
          </TabsContent>
          <TabsContent value="day2">
            <ScheduleDay events={scheduleData.day2} />
          </TabsContent>
          <TabsContent value="day3">
            <ScheduleDay events={scheduleData.day3} />
          </TabsContent>
        </Tabs>
      </div>
    </section>
  );
}