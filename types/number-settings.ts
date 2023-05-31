export enum NumberSettings {
  Decimals = process.env.NEXT_PUBLIC_VERCEL_ENV !== 'production' ? 5 : 3,
}
