/*
Instructions
1rst Daily Challenge
Create two functions. Each function should return a promise.
The first function called makeAllCaps(), takes an array of words as an argument
If all the words in the array are strings, resolve the promise. The value of the resolved promise is the array of words uppercased.
else, reject the promise with a reason.
The second function called sortWords(), takes an array of words uppercased as an argument
If the array length is bigger than 4, resolve the promise. The value of the resolved promise is the array of words sorted in alphabetical order.
else, reject the promise with a reason.*/

const makeAllCaps = (arr) => {
    return new Promise((resolve, reject) => {
        if (arr.every(word => typeof word === 'string')){
            resolve(arr.map(word => word.toUpperCase()))
        }
        else {
            reject("not all words are strings")
        }
    })
}

const sortWords = (arr) => {
    return new Promise((resolve, reject) => {
        if (arr.length > 4) {
            resolve (arr.sort())
        }
        else {
            reject("the array is too short")
        }
    })
}


//in this example, the catch method is executed
makeAllCaps([1, "pear", "banana"])
      .then((arr) => sortWords(arr))
      .then((result) => console.log(result))
      .catch(error => console.log(error))

//in this example, the catch method is executed
makeAllCaps(["apple", "pear", "banana"])
      .then((arr) => sortWords(arr))
      .then((result) => console.log(result))
      .catch(error => console.log(error))

//in this example, you should see in the console, 
// the array of words uppercased and sorted
makeAllCaps(["apple", "pear", "banana", "melon", "kiwi"])
      .then((arr) => sortWords(arr))
      .then((result) => console.log(result)) //["APPLE","BANANA", "KIWI", "MELON", "PEAR"]
      .catch(error => console.log(error))


/*
2nd Daily Challenge*/
const morse = `{
  "0": "-----",
  "1": ".----",
  "2": "..---",
  "3": "...--",
  "4": "....-",
  "5": ".....",
  "6": "-....",
  "7": "--...",
  "8": "---..",
  "9": "----.",
  "a": ".-",
  "b": "-...",
  "c": "-.-.",
  "d": "-..",
  "e": ".",
  "f": "..-.",
  "g": "--.",
  "h": "....",
  "i": "..",
  "j": ".---",
  "k": "-.-",
  "l": ".-..",
  "m": "--",
  "n": "-.",
  "o": "---",
  "p": ".--.",
  "q": "--.-",
  "r": ".-.",
  "s": "...",
  "t": "-",
  "u": "..-",
  "v": "...-",
  "w": ".--",
  "x": "-..-",
  "y": "-.--",
  "z": "--..",
  ".": ".-.-.-",
  ",": "--..--",
  "?": "..--..",
  "!": "-.-.--",
  "-": "-....-",
  "/": "-..-.",
  "@": ".--.-.",
  "(": "-.--.",
  ")": "-.--.-"
}`
/*1.Create three functions. The two first functions should return a promise..

2.The first function is named toJs():
this function converts the morse json string provided above to a morse javascript object.
if the morse javascript object is empty, throw an error (use reject)
else return the morse javascript object (use resolve)*/

//comment from Ziv, use try and catch, so error can be handled. add consition to check if it is empty
const toJS = (json) => {
    return new Promise((resolve, reject) => {
        try {
            let jsonObj = JSON.parse(json);
            resolve(jsonObj);
        } catch (error) {
            reject('this is not a JSON')
        }
        if (Object.keys(jsonObj).length === 0){
            reject('there is no object')
        }
    })
}

/*toJS(morse)
.then((result)=>{
    console.log(result);
})
.catch((error)=>{
    console.log(error);
});*/

/*3.The second function called toMorse(morseJS), takes one argument: the new morse javascript object.

This function asks the user for a word or a sentence.
if the user entered a character that doesn’t exist in the new morse javascript object, throw an error. (use reject)
else return an array with the morse translation of the user’s word.
if the user enters the word "Hello", the promise resolves with this value ["....", ".", ".-..", ".-..","---"]
if the user entered the word "¡Hola!", the promise rejects because the character "¡" doesn't exist in the morse javascript object*/
const toMorse = (obj) => {
    let sentence = prompt("Please enter a sentence/word").toLowerCase();
    return new Promise((resolve, reject) => {
        if (!sentence) {
            reject("no input")
        }
        else {
        const lettersArray = sentence.split("").filter(char => char !== " ");
        const returnArr = lettersArray.map((char) => {
        if (char in obj){
            return (obj[char]);
            
        }
        else {
            reject('wrong input')
        }
    })
    resolve (returnArr);
        }

    })
}

/*toJS(morse)
.then((result)=>{
    console.log(result);
    return console.log(toMorse(result));
})
.catch((error)=>{
    console.log(error);
});*/

/*4.The third function called joinWords(morseTranslation), takes one argument: the morse translation array

this function joins the morse translation by using line break and display it on the page (ie. On the DOM)*/

const render = (obj) => {
    const html = obj.map((item) => {
        return `<div>${item}</div>`;
  });
  document.getElementById("morse").innerHTML = html.join("");
};
    
/*5.Chain the three functions.*/

toJS(morse)
.then((result)=>{
    console.log(result);
    return toMorse(result);
})
.then((result) => {
    console.log(result);
    return render(result);
})
.catch((error)=>{
    console.log(error);
});


        