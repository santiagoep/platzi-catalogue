export const isAValidExternalUrl = (url) =>
  /^(ftp|http|https):\/\/[^ "]+$/.test(url);

export default isAValidExternalUrl;
