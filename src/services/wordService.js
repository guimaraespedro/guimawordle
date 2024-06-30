const apiEnpoint =
  "https://random-word-api.herokuapp.com/word?length=5&number=1";

// this endpoint returns a array with only one word, so we need to return the
// value on the position 0
export const queryWord = async () => {
  const response = await fetch(apiEnpoint);
  const wordArr = await response.json();
  return wordArr[0];
};
