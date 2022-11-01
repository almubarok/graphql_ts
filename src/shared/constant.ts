export const APP_SECRET = process.env.APP_SECRET || 'secretkey';
export const JWT_EXPIRY = process.env.JWT_EXPIRY || '2h';
export const isDev = () => process.env.NODE_ENV === 'development';
