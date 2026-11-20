/**
 * cn — Lightweight className helper (no library dependency)
 * Usage: cn('base-class', condition && 'conditional-class', 'another')
 */
export function cn(...classes: (string | boolean | undefined | null)[]): string {
  return classes.filter(Boolean).join(' ');
}
