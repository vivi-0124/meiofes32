'use client';

import { useState } from 'react';
import { Tabs, TabsList, TabsTrigger, TabsContent } from '@/../components/ui/tabs';
import { Input } from '@/../components/ui/input';
import { Button } from '@/../components/ui/button';
import { Badge } from '@/../components/ui/badge';
import { Search, Filter, Clock, MapPin, ChevronDown, ChevronUp } from 'lucide-react';

interface Event {
  id: string;
  title: string;
  time: string;
  endTime: string;
  location: string;
  category: string;
  description: string;
}

// 仮のイベントデータ
const eventsData: Record<string, Event[]> = {
  day1: [
    {
      id: '1',
      title: 'オープニングセレモニー',
      time: '10:00',
      endTime: '11:00',
      location: 'メインステージ',
      category: 'メインイベント',
      description: '大学祭の開始を告げる公式セレモニー。学長挨拶や実行委員会による企画発表などが行われます。'
    },
    {
      id: '2',
      title: '軽音楽部ライブ',
      time: '11:30',
      endTime: '13:00',
      location: '屋外ステージA',
      category: 'パフォーマンス',
      description: '学内バンドによるライブパフォーマンス。ポップスからロックまで幅広いジャンルの曲を演奏します。'
    },
    {
      id: '3',
      title: '研究室公開「AI最前線」',
      time: '13:00',
      endTime: '15:00',
      location: '工学部棟3F',
      category: '展示・体験',
      description: '最新のAI研究成果を体験できる企画。音声認識や画像生成などの技術をデモンストレーションします。'
    },
    {
      id: '4',
      title: 'ダンスパフォーマンス',
      time: '15:00',
      endTime: '16:30',
      location: '体育館',
      category: 'パフォーマンス',
      description: 'ダンスサークルによる迫力のパフォーマンス。様々なジャンルのダンスを披露します。'
    },
    {
      id: '5',
      title: 'ゲストアーティストライブ',
      time: '17:00',
      endTime: '19:00',
      location: 'メインステージ',
      category: 'メインイベント',
      description: '人気アーティストによる特別ライブ。大学祭初日を締めくくる華やかなパフォーマンスをお楽しみください。'
    },
  ],
  day2: [
    {
      id: '101',
      title: '模擬店オープン',
      time: '10:30',
      endTime: '19:00',
      location: '中央広場',
      category: '飲食',
      description: '各団体による飲食ブースがオープン。世界各国の料理やオリジナルメニューをお楽しみいただけます。'
    },
    {
      id: '102',
      title: '学術シンポジウム',
      time: '12:00',
      endTime: '14:00',
      location: '大講堂',
      category: 'トークショー',
      description: '「未来社会と大学の役割」をテーマにしたパネルディスカッション。著名な研究者や卒業生が登壇します。'
    },
    {
      id: '103',
      title: 'お笑いライブ',
      time: '14:30',
      endTime: '16:00',
      location: '小講堂',
      category: 'パフォーマンス',
      description: '人気お笑い芸人によるスペシャルライブ。学生お笑いサークルとのコラボも予定されています。'
    },
    {
      id: '104',
      title: 'プログラミングコンテスト',
      time: '16:00',
      endTime: '18:00',
      location: '情報科学棟',
      category: 'コンテスト',
      description: '制限時間内にプログラミング課題に挑戦するコンテスト。初心者から上級者まで参加できます。'
    },
    {
      id: '105',
      title: '花火大会',
      time: '18:30',
      endTime: '19:30',
      location: 'グラウンド',
      category: 'メインイベント',
      description: '大学祭2日目の夜を彩る花火大会。約2000発の花火が夜空を彩ります。'
    },
  ],
  day3: [
    {
      id: '201',
      title: '卒業生トークセッション',
      time: '10:00',
      endTime: '11:30',
      location: '同窓会ホール',
      category: 'トークショー',
      description: '各界で活躍する卒業生によるトークセッション。大学時代の思い出や現在の仕事について語ります。'
    },
    {
      id: '202',
      title: '文化部展示ツアー',
      time: '11:30',
      endTime: '13:00',
      location: '芸術棟',
      category: '展示・体験',
      description: '美術部、写真部、書道部などの作品展示をガイド付きでめぐるツアー。制作過程や作品の解説が聞けます。'
    },
    {
      id: '203',
      title: 'スポーツ大会決勝',
      time: '13:30',
      endTime: '15:00',
      location: 'グラウンド',
      category: 'コンテスト',
      description: '3日間にわたって行われたスポーツ大会の決勝戦。サッカー、バスケットボール、バレーボールの試合が行われます。'
    },
    {
      id: '204',
      title: 'STELLAR特別ライブ',
      time: '15:30',
      endTime: '17:30',
      location: 'メインステージ',
      category: 'メインイベント',
      description: '人気グループ「STELLAR」による特別ライブ。大学祭最終日を盛り上げる特別公演です。'
    },
    {
      id: '205',
      title: 'クロージングセレモニー',
      time: '18:00',
      endTime: '19:00',
      location: 'メインステージ',
      category: 'メインイベント',
      description: '大学祭の締めくくりとなるセレモニー。3日間の思い出を振り返り、次回への期待を高めます。'
    },
  ]
};

// カテゴリ別の色
const categoryColors: Record<string, string> = {
  'メインイベント': 'festival',
  'パフォーマンス': 'default',
  'トークショー': 'secondary',
  '展示・体験': 'outline',
  'コンテスト': 'destructive',
  '飲食': 'secondary'
};

// 時間枠ごとのイベント表示コンポーネント
function TimeSlotEvents({
  events,
  showDescription,
  toggleDescription,
  categoryColors
}: {
  events: Event[];
  showDescription: string | null;
  toggleDescription: (id: string) => void;
  categoryColors: Record<string, string>;
}) {
  if (events.length === 0) {
    return <div className="text-muted-foreground text-sm py-2 px-4">この時間のイベントはありません</div>;
  }

  return (
    <div className="space-y-3">
      {events.map(event => (
        <div 
          key={event.id}
          className="bg-card border rounded-lg p-4 transition-all hover:shadow-md"
        >
          <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2">
            <div className="flex-grow">
              <div className="flex flex-wrap items-center gap-2 mb-2">
                <Badge variant={categoryColors[event.category] as any || 'secondary'}>
                  {event.category}
                </Badge>
                <span className="text-sm text-muted-foreground flex items-center">
                  <Clock className="h-3 w-3 mr-1" />
                  {event.time} - {event.endTime}
                </span>
              </div>
              <h3 className="text-lg font-semibold">{event.title}</h3>
              <p className="text-sm text-muted-foreground flex items-center mt-1">
                <MapPin className="h-3 w-3 mr-1" />
                {event.location}
              </p>
            </div>
            
            <Button
              variant="ghost"
              size="sm"
              onClick={() => toggleDescription(event.id)}
              className="self-start sm:self-center"
              aria-expanded={showDescription === event.id}
              aria-controls={`description-${event.id}`}
            >
              {showDescription === event.id ? (
                <ChevronUp className="h-4 w-4" />
              ) : (
                <ChevronDown className="h-4 w-4" />
              )}
              <span className="sr-only">詳細を{showDescription === event.id ? '閉じる' : '表示'}</span>
            </Button>
          </div>
          
          {showDescription === event.id && (
            <div 
              id={`description-${event.id}`}
              className="mt-4 pt-4 border-t text-sm text-muted-foreground"
            >
              {event.description}
            </div>
          )}
        </div>
      ))}
    </div>
  );
}

export function ScheduleDisplay() {
  const [activeDay, setActiveDay] = useState('day1');
  const [searchTerm, setSearchTerm] = useState('');
  const [filteredEvents, setFilteredEvents] = useState<Event[]>(eventsData.day1);
  const [showDescription, setShowDescription] = useState<string | null>(null);

  // 検索とフィルタリング
  const handleSearch = (e: React.FormEvent) => {
    e.preventDefault();
    const term = searchTerm.toLowerCase();
    
    // 現在のタブのイベントから検索
    const filtered = eventsData[activeDay].filter(event => 
      event.title.toLowerCase().includes(term) || 
      event.location.toLowerCase().includes(term) || 
      event.category.toLowerCase().includes(term) ||
      event.description.toLowerCase().includes(term)
    );
    
    setFilteredEvents(filtered);
  };

  // タブ切り替え時にイベントをリセット
  const handleTabChange = (value: string) => {
    setActiveDay(value);
    setSearchTerm('');
    setFilteredEvents(eventsData[value]);
  };

  // 詳細表示の切り替え
  const toggleDescription = (id: string) => {
    if (showDescription === id) {
      setShowDescription(null);
    } else {
      setShowDescription(id);
    }
  };

  // 時間帯でイベントをグループ化
  const timeSlots = ['10:00', '11:00', '12:00', '13:00', '14:00', '15:00', '16:00', '17:00', '18:00', '19:00'];
  
  const getEventsForTimeSlot = (timeSlot: string) => {
    return filteredEvents.filter(event => {
      const eventHour = parseInt(event.time.split(':')[0]);
      const slotHour = parseInt(timeSlot.split(':')[0]);
      return eventHour === slotHour;
    });
  };

  return (
    <div className="space-y-6">
      <Tabs defaultValue="day1" className="w-full" onValueChange={handleTabChange}>
        <TabsList className="grid w-full grid-cols-3 mb-8">
          <TabsTrigger value="day1">6月1日 (1日目)</TabsTrigger>
          <TabsTrigger value="day2">6月2日 (2日目)</TabsTrigger>
          <TabsTrigger value="day3">6月3日 (3日目)</TabsTrigger>
        </TabsList>
        
        {/* 検索フォーム */}
        <form onSubmit={handleSearch} className="flex gap-2 mb-6">
          <div className="relative flex-grow">
            <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 h-4 w-4 text-muted-foreground" />
            <Input
              type="search"
              placeholder="イベントを検索..."
              className="pl-10"
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
            />
          </div>
          <Button type="submit" variant="secondary">
            検索
          </Button>
        </form>
        
        {/* タブコンテンツ - 全日共通のフォーマット */}
        {['day1', 'day2', 'day3'].map((day) => (
          <TabsContent key={day} value={day} className="space-y-6 mt-0">
            {/* 時間帯ごとのセクション */}
            {timeSlots.map((timeSlot) => {
              const eventsInSlot = day === activeDay 
                ? getEventsForTimeSlot(timeSlot)
                : [];
              
              if (eventsInSlot.length === 0) return null;
              
              return (
                <section key={`${day}-${timeSlot}`} className="space-y-2">
                  <h3 className="text-lg font-semibold flex items-center">
                    <Clock className="mr-2 h-5 w-5 text-[#E84D8A]" />
                    {timeSlot}
                  </h3>
                  <TimeSlotEvents
                    events={eventsInSlot}
                    showDescription={showDescription}
                    toggleDescription={toggleDescription}
                    categoryColors={categoryColors}
                  />
                </section>
              );
            })}
            
            {/* 検索結果が0件の場合 */}
            {filteredEvents.length === 0 && (
              <div className="py-8 text-center">
                <p className="text-muted-foreground">
                  検索条件に一致するイベントが見つかりませんでした。
                </p>
              </div>
            )}
          </TabsContent>
        ))}
      </Tabs>
    </div>
  );
}