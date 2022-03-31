export function maxChar(story, num) {
  if (story.title?.length > num) {
    return `${story.title.slice(0, num)}...`
  } else {
    return story.title
  }
} 
