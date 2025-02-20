"use client";

import React from "react";

// 簡易的なプロバイダー実装（開発初期段階用）
export function I18nProvider({ children }: { children: React.ReactNode }) {
  return <>{children}</>;
}

export function AnalyticsProvider({ children }: { children: React.ReactNode }) {
  return <>{children}</>;
}

export function SentryProvider({ children }: { children: React.ReactNode }) {
  return <>{children}</>;
}

export function CookieConsentProvider({ children }: { children: React.ReactNode }) {
  return <>{children}</>;
}

export function A11yProvider({ children }: { children: React.ReactNode }) {
  return <>{children}</>;
}