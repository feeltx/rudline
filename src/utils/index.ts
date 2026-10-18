const WEEK = 7 * 24 * 60 * 60 * 1000;

export const isNew = (date: Date | string) =>
  Date.now() - new Date(date).getTime() < WEEK;
