import { Badge } from '@/../components/ui/badge';
import { CalendarClock, MapPin } from 'lucide-react';

interface Event {
  time: string;
  title: string;
  location: string;
  category: string;
}

interface ScheduleDayProps {
  events: Event[];
}

export function ScheduleDay({ events }: ScheduleDayProps) {
  const getCategoryColor = (category: string) => {
    switch (category) {
      case 'メイン':
        return 'festival'; // フェスティバル用の赤/ピンク
      case 'パフォーマンス':
        return 'default'; // 青系
      case '展示':
        return 'secondary'; // グレー系
      case 'アカデミック':
        return 'outline'; // 白背景に枠
      case 'コンテスト':
        return 'default'; // 青系
      case 'トーク':
        return 'secondary'; // グレー系
      case 'スポーツ':
        return 'default'; // 青系
      case '飲食':
        return 'destructive'; // 赤系
      default:
        return 'secondary';
    }
  };

  return (
    <div className="space-y-4">
      {events.map((event, index) => (
        <div 
          key={index} 
          className="bg-muted/40 hover:bg-muted transition-colors p-4 rounded-lg border"
        >
          <div className="flex flex-col sm:flex-row sm:items-center gap-4">
            <div className="flex-shrink-0 w-24">
              <span className="text-xl font-medium">{event.time}</span>
            </div>
            
            <div className="flex-grow">
              <h3 className="text-lg font-semibold mb-1">{event.title}</h3>
              <div className="flex flex-wrap items-center gap-4 text-sm text-muted-foreground">
                <span className="flex items-center gap-1">
                  <MapPin className="h-4 w-4" />
                  {event.location}
                </span>
              </div>
            </div>
            
            <div className="flex-shrink-0">
              <Badge variant={getCategoryColor(event.category) as any}>
                {event.category}
              </Badge>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
}