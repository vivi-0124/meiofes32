import type { Metadata, Viewport } from 'next';
import { Inter } from 'next/font/google';
import '@/../styles/globals.css';

import { 
  ThemeProvider,
  I18nProvider,
  AnalyticsProvider,
  SentryProvider, 
  CookieConsentProvider,
  A11yProvider 
} from '@/../providers';

import { Header } from '@/../components/common/header';
import { Footer } from '@/../components/common/footer';
import { SkipLink } from '@/../components/accessibility/skip-link';
import { CookieConsent } from '@/../components/ui/cookie-consent';

const inter = Inter({
  subsets: ['latin'],
  display: 'swap',
  variable: '--font-inter',
});

export const metadata: Metadata = {
  title: {
    template: '%s | 大学祭2025',
    default: '大学祭2025 - 未来への祭典',
  },
  description: '2025年6月1日〜3日に開催される日本最大級の大学祭。学生によるイベント、展示、パフォーマンスをお楽しみください。',
  keywords: ['大学祭', '学園祭', 'フェスティバル', 'イベント', 'タイムテーブル'],
  authors: [{ name: '大学祭実行委員会' }],
  viewport: 'width=device-width, initial-scale=1',
  robots: {
    index: true,
    follow: true,
  },
  manifest: '/manifest.json',
  openGraph: {
    type: 'website',
    locale: 'ja_JP',
    url: 'https://festival.example.ac.jp',
    siteName: '大学祭',
    images: [{
      url: '/images/og/default.jpg',
      width: 1200,
      height: 630,
      alt: '大学祭',
    }],
  },
  twitter: {
    card: 'summary_large_image',
    site: '@festival',
  },
  verification: {
    google: 'google-site-verification-code',
  },
  metadataBase: new URL('http://localhost:3000'),
};

export const viewport: Viewport = {
  width: 'device-width',
  initialScale: 1,
  maximumScale: 1,
  userScalable: false,
  themeColor: '#E84D8A',
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="ja" suppressHydrationWarning>
      <body className={inter.className}>
        <ThemeProvider
          attribute="class"
          defaultTheme="light"
          enableSystem
          disableTransitionOnChange
        >
          <I18nProvider>
            <AnalyticsProvider>
              <SentryProvider>
                <CookieConsentProvider>
                  <A11yProvider>
                    <div className="flex min-h-screen flex-col">
                      <SkipLink />
                      <Header />
                      <main id="main-content" className="flex-1">
                        {children}
                      </main>
                      <Footer />
                      <CookieConsent />
                    </div>
                  </A11yProvider>
                </CookieConsentProvider>
              </SentryProvider>
            </AnalyticsProvider>
          </I18nProvider>
        </ThemeProvider>
      </body>
    </html>
  );
}
