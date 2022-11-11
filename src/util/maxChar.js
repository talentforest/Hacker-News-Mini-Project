export function maxChar(story, num) {
  if (story?.length > num) return `${story.slice(0, num)}...`;
  return story;
}
