import Link from 'next/link';

export function FooterLinks() {
  const links = [
    {
      heading: 'ご来場の方へ',
      items: [
        { label: '来場案内', href: '/visitor-guidelines' },
        { label: 'タイムテーブル', href: '/timetable' },
        { label: 'キャンパスマップ', href: '/campus-map' },
        { label: 'アクセス', href: '/access' },
        { label: 'よくある質問', href: '/faq' },
      ],
    },
    {
      heading: '参加者の方へ',
      items: [
        { label: '参加者向け情報', href: '/information' },
        { label: '屋外ステージ', href: '/outdoor-stage' },
        { label: '教室企画', href: '/classroom' },
        { label: '模擬店', href: '/food-stalls' },
      ],
    },
  ];

  return (
    <div className="grid grid-cols-2 gap-8">
      {links.map((column) => (
        <div key={column.heading} className="space-y-3">
          <h3 className="text-base font-medium">{column.heading}</h3>
          <ul className="space-y-2">
            {column.items.map((link) => (
              <li key={link.href}>
                <Link 
                  href={link.href}
                  className="text-sm text-muted-foreground hover:text-foreground transition-colors"
                >
                  {link.label}
                </Link>
              </li>
            ))}
          </ul>
        </div>
      ))}
    </div>
  );
}