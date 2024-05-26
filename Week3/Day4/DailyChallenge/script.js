/*
Create a variable called sentence. The value of the variable should be a string that contains the words “not” and “bad”.
For example, “The movie is not that bad, I like it”.

Create a variable called wordNot where it’s value is the first appearance (ie. the position) of the substring “not” (from the sentence variable).

Create a variable called wordBad where it’s value is the first appearance (ie. the position) of the substring “bad” (from the sentence variable).

If the word “bad” comes after the word “not”, you should replace the whole “not…bad” substring with “good”, then console.log the result.
For example, the result here should be : “The movie is good, I like it”
If the word “bad” does not come after “not” or the words are not in the sentence, console.log the original sentence.


*/
let sentence = "The movie is not that bad I like it";
let sentenceArray = sentence.split(' ');
console.log(sentenceArray)
//let wordNot = sentenceArray[3];
let wordNot = sentenceArray.indexOf("not");
let wordBad = sentenceArray[5];
if (sentenceArray.indexOf("not") < sentenceArray.indexOf("bad")){
    sentenceArray.splice(3,3,"good");
    console.log(sentenceArray.join(" "));
}
else {
    console.log(sentenceArray.join(" "))
}













