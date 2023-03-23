export const getBaseUrl = () => {
  return process.env.NODE_ENV === 'development'
    ? 'http://127.0.0.1:3000'
    : process.env.SITE_URL
}
