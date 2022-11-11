export function changeUrlMark(url) {
  if (url?.includes("https://www") || url?.includes("http://www"))
    return url.slice(12).split("/")[0];
  if (url?.includes("https://") || url?.includes("http://"))
    return url.slice(8).split("/")[0];
}
