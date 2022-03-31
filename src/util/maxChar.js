export function maxChar(story) {
  if (story.title?.length > 68) {
    return `${story.title.slice(0, 68)}...`
  } else {
    return story.title
  }
} 
