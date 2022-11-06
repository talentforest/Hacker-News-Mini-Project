export function changeUrlMark(url) {
  if (url?.includes("https://www")) return url.slice(12).split("/")[0];
  if (url?.includes("https://")) return url.slice(8).split("/")[0];
}
