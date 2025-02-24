/*Q5) Write a function to replace wrong word with correct word in any sentance.
Like this - correctfn(string, wrong, correct)
Use string.replace in function.*/
function correctfn(sentence, wrongWord, correctWord) {
  const regex = new RegExp("\\b" + wrongWord + "\\b", "gi");
  const correctedSentence = sentence.replace(regex, correctWord);
  return correctedSentence;
}

const sentence = "The qick brown fox jumps over the lazy dog.";
const wrongWord = "qick";
const correctWord = "quick";

const correctedSentence = correctfn(sentence, wrongWord, correctWord);
console.log(correctedSentence);
