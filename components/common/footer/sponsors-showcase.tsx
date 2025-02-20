import Link from 'next/link';

export function SponsorsShowcase() {
  const sponsors = [
    { id: 1, name: 'テックカンパニー', tier: 'platinum' },
    { id: 2, name: 'エコフレンドリー', tier: 'gold' },
    { id: 3, name: 'フードコーポレーション', tier: 'gold' },
    { id: 4, name: 'ファッションブランド', tier: 'silver' },
    { id: 5, name: 'クリエイティブスタジオ', tier: 'silver' },
    { id: 6, name: 'スポーツギア', tier: 'silver' },
  ];
  
  // スポンサーロゴプレースホルダを生成
  const generateLogoPlaceholder = (id: number, tier: string) => {
    const tierColor = {
      'platinum': 'bg-gradient-to-r from-slate-100 to-slate-300',
      'gold': 'bg-gradient-to-r from-amber-200 to-amber-300',
      'silver': 'bg-gradient-to-r from-gray-200 to-gray-300',
    }[tier] || 'bg-gray-200';
    
    return (
      <div className={`flex items-center justify-center rounded-md ${tierColor} p-4 h-10`}>
        <span className="text-xs font-medium opacity-70">{tier}</span>
      </div>
    );
  };

  return (
    <div className="py-8 border-t border-border">
      <div className="text-center mb-6">
        <h2 className="text-xl font-semibold mb-2">スポンサー</h2>
        <p className="text-sm text-muted-foreground">
          大学祭を支援してくださる企業・団体の皆様
        </p>
      </div>
      
      <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-6 gap-4">
        {sponsors.map((sponsor) => (
          <Link
            key={sponsor.id}
            href={`/sponsors#${sponsor.id}`}
            className="block transition-transform hover:scale-105"
          >
            {generateLogoPlaceholder(sponsor.id, sponsor.tier)}
            <span className="sr-only">{sponsor.name}</span>
          </Link>
        ))}
      </div>
      
      <div className="mt-6 text-center">
        <Link 
          href="/sponsors"
          className="text-sm font-medium text-primary hover:underline"
        >
          すべてのスポンサーを見る
        </Link>
      </div>
    </div>
  );
}