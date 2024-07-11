/*
Instructions
Use this Giphy API Random documentation. Use this API Key : hpvZycW22qCjn5cRM1xtWB8NKq4dQ2My
In the HTML file, add a form, containing an input and a button. This input is used to fetch gif depending on a specific category.
In the JS file, create a program to fetch one random gif depending on the search of the user (ie. If the search is “sun”, append on the page one gif with a category of “sun”).
The gif should be appended with a DELETE button next to it. Hint : to find the URL of the gif, look for the sub-object named “images” inside the data you receive from the API.
Allow the user to delete a specific gif by clicking the DELETE button.
Allow the user to remove all of the GIFs by clicking a DELETE ALL button.*/
let myInput;
document.getElementById('myForm').addEventListener('submit', function(event){
    event.preventDefault();
myInput = document.getElementById('myText');
let myInputValue = myInput.value;
console.log(myInputValue);
getGif(myInputValue)
})
let api_key = 'hpvZycW22qCjn5cRM1xtWB8NKq4dQ2My'
//let tag = myInput
//let url = 'https://api.giphy.com/v1/gifs/search?api_key=hpvZycW22qCjn5cRM1xtWB8NKq4dQ2My'
let gifImg;
const getGif = (tag) => {
let url = `https://api.giphy.com/v1/gifs/random?api_key=${api_key}&tag=${tag}`
    fetch(url)

.then((response)=>{
    if(response.ok){
        return response.json();
    }
    else{
        throw new Error("no tag existing")
    }
})
.then((obj)=>{
    let gifURL = obj.data.images.original.url;
    //console.log(gifURL);
    gifImg = document.createElement('img');
    gifImg.src = gifURL;
    document.getElementById('myGIF').appendChild(gifImg);
})
.catch((err)=>{
    console.log(err);
})
}
document.getElementById('delete').addEventListener('click', function(event){
    document.getElementById('myGIF').removeChild(gifImg);
});

