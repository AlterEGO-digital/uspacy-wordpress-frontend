export const isDev = process.env.NODE_ENV === 'development';

export const isStage = window.location.host.includes('staging.uspacy.tech');

export const DOMAIN = isDev || isStage ? 'https://wordpress-uspacy.alterego.biz.ua' : 'https://wordpress-uspacy.alterego.digital';
