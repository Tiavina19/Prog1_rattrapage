export function removeWords(original, wordsToRemove) {
  let words = original.split(" ");
  let filterWords = words.filter((word) => !wordsToRemove.includes(word));
  return filterWords.join(" ");
}
