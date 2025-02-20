import { type ClassValue, clsx } from 'clsx';
import { twMerge } from 'tailwind-merge';
import { format, formatDistance } from 'date-fns';
import { ja } from 'date-fns/locale';

/**
 * Merges Tailwind CSS classes without conflicts
 */
export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

/**
 * Format date to localized string (YYYY年MM月DD日)
 */
export function formatDate(date: Date | string, formatStr = 'yyyy年MM月dd日'): string {
  const dateObj = typeof date === 'string' ? new Date(date) : date;
  return format(dateObj, formatStr, { locale: ja });
}

/**
 * Format date to relative time (3日前, 2時間前, etc)
 */
export function formatRelativeTime(date: Date | string): string {
  const dateObj = typeof date === 'string' ? new Date(date) : date;
  return formatDistance(dateObj, new Date(), { 
    addSuffix: true,
    locale: ja 
  });
}

/**
 * Generate random ID with prefix
 */
export function generateId(prefix = 'id'): string {
  return `${prefix}-${Math.random().toString(36).substring(2, 9)}`;
}

/**
 * Truncate text with ellipsis
 */
export function truncateText(text: string, length = 100): string {
  if (text.length <= length) return text;
  return `${text.substring(0, length)}...`;
}

/**
 * Convert file size to human readable format
 */
export function formatFileSize(bytes: number): string {
  if (bytes === 0) return '0 Bytes';
  
  const k = 1024;
  const sizes = ['Bytes', 'KB', 'MB', 'GB', 'TB'];
  const i = Math.floor(Math.log(bytes) / Math.log(k));
  
  return `${parseFloat((bytes / Math.pow(k, i)).toFixed(2))} ${sizes[i]}`;
}

/**
 * Deep merge objects
 */
export function deepMerge<T extends Record<string, unknown>>(target: T, source: Record<string, unknown>): T {
  const output = { ...target } as T;
  
  if (isObject(target) && isObject(source)) {
    Object.keys(source).forEach(key => {
      const sourceValue = source[key];
      if (isObject(sourceValue)) {
        if (!(key in target)) {
          (output as Record<string, unknown>)[key] = sourceValue;
        } else {
          const targetValue = target[key];
          if (isObject(targetValue)) {
            (output as Record<string, unknown>)[key] = deepMerge(
              targetValue as Record<string, unknown>,
              sourceValue as Record<string, unknown>
            );
          }
        }
      } else {
        (output as Record<string, unknown>)[key] = sourceValue;
      }
    });
  }
  
  return output;
}

/**
 * Check if value is an object
 */
function isObject(item: unknown): item is object {
  return Boolean(item && typeof item === 'object' && !Array.isArray(item));
}

/**
 * Debounce function
 */
export function debounce<T extends (...args: unknown[]) => unknown>(
  func: T,
  wait = 300
): (...args: Parameters<T>) => void {
  let timeout: ReturnType<typeof setTimeout> | null = null;
  
  return function(...args: Parameters<T>) {
    if (timeout) clearTimeout(timeout);
    timeout = setTimeout(() => func(...args), wait);
  };
}

/**
 * Get browser preferred language
 */
export function getBrowserLanguage(): string {
  if (typeof navigator === 'undefined') return 'ja';
  
  const browserLang = navigator.language;
  const supportedLocales = ['ja', 'en', 'zh'];
  
  // Get language part only (e.g., 'en-US' -> 'en')
  const langPrefix = browserLang.split('-')[0];
  
  return supportedLocales.includes(langPrefix) ? langPrefix : 'ja';
}

/**
 * Safely parse JSON
 */
export function safeJsonParse<T>(json: string, fallback: T): T {
  try {
    return JSON.parse(json) as T;
  } catch {
    return fallback;
  }
}

/**
 * Remove HTML tags from string
 */
export function stripHtml(html: string): string {
  return html.replace(/<\/?[^>]+(>|$)/g, '');
}