export const getBaseUrl = (): string => {
  return process.env.NODE_ENV === 'development'
    ? 'http://127.0.0.1:3000'
    : String(process.env.SITE_URL)
}
