export const parseUrl = (url: string) => {
  const parsedUrl = new URL(url);
  return parsedUrl.origin;
};
