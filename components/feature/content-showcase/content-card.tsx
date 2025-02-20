import Link from 'next/link';
import { ArrowRight } from 'lucide-react';
import { Card } from '@/../components/ui/card';

interface ContentCardProps {
  card: {
    id: string;
    title: string;
    description: string;
    imageUrl: string | null;
    link: string;
    color: string;
    icon: React.ReactNode;
  };
}

export function ContentCard({ card }: ContentCardProps) {
  return (
    <Link href={card.link} className="flex-shrink-0 w-[280px] sm:w-[320px] h-full">
      <Card className="h-full overflow-hidden hover:shadow-md transition-all duration-200 hover:translate-y-[-4px]">
        <div className={`w-full h-32 bg-gradient-to-br ${card.color} flex items-center justify-center`}>
          <div className="w-16 h-16 flex items-center justify-center">
            {card.icon}
          </div>
        </div>
        
        <div className="p-4">
          <h3 className="text-xl font-semibold mb-2">{card.title}</h3>
          <p className="text-sm text-muted-foreground mb-4">
            {card.description}
          </p>
          <div className="flex items-center text-sm font-medium text-primary">
            <span>詳細を見る</span>
            <ArrowRight className="ml-1 h-4 w-4" />
          </div>
        </div>
      </Card>
    </Link>
  );
}