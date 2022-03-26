export function orangeWord(story) {
  if (story)
    return `${story?.title.split(" ")[0]} ${story?.title.split(" ")[1]} `
}
