/*
Instructions
Create a function that:

takes in two strings as two parameters
and returns a boolean that indicates whether or not the first string is an anagram of the second string.
Some Help

What is an anagram?
An anagram is another word or phrase formed by rearranging letters of the first word or phrase.


Example of anagrams

"Astronomer" is an anagram of "Moon starer"
"School master" is an anagram of "The classroom"
"The Morse Code" is an anagram of "Here come dots"


Do we need to consider whitespace?
Trim whitespace prior to comparison.*/

function checkAnagram(a,b){
    let aLowercase = a.toLowerCase();
    let bLowercase = b.toLowerCase();
    let aArray = Array.from(aLowercase.trim());
    let sortedA = aArray.sort();
    let bArray = Array.from(bLowercase.trim());
    let sortedB = bArray.sort();
    //console.log(sortedA, sortedB);
    if (sortedA.length !== sortedB.length){
        return false;
    }
    for (let index = 0; index < sortedA.length; index++) {
        if (sortedA[index]!==sortedB[index]){
            return false;
            //console.log(sortedA[index]);
        }
    else{
        return true;
    }
    
}
}

let result = checkAnagram("School master","The classroom");
console.log(result);