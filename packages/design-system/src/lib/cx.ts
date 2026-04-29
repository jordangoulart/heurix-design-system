export type CxValue = string | false | 0 | null | undefined;

export function cx(...values: CxValue[]): string {
  return values.filter((v): v is string => typeof v === 'string' && v.length > 0).join(' ');
}
