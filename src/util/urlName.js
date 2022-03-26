export function urlName(story) {
  if (story?.url?.includes("https://www"))
    return story?.url?.slice(12).split("/")[0];

  if (story?.url?.includes("https://"))
    return story?.url?.slice(8).split("/")[0];

}
