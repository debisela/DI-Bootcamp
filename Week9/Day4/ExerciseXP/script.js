/*
🌟 Exercise 1 : HTML Form
Instructions
Hint : Read about sending form data using the HTTP protocol

form

Create a form like the one above. The form should contain three inputs:
a small text input asking for a name,
a larger textarea input to write a message,
a submit input (“Send”)

When you click the Send button, the form will be submitted with a GET method. (you can use the same HTML file for the action url)
Where will the sent data appear?*/
//the data will appear in the url ?name=John&comment=Hello

/*
🌟 Exercise 2 : HTML Form #2
Instructions
Use the same form structure as Exercise 1.
When you click the Send button, the form will be submitted with a POST method.(you can use the same HTML file for the action url)
Where will the sent data appear? Hint : Look at the Network Tab*/

//we will not see in in the url, only in the developer tools-> network

/*
🌟 Exercise 3 : JSON Mario
Instructions
Using this code:*/

const marioGame = {
  detail : "An amazing game!",
  characters : {
      mario : {
        description:"Small and jumpy. Likes princesses.",
        height: 10,
        weight: 3,
        speed: 12,
      },
      bowser : {
        description: "Big and green, Hates princesses.",
        height: 16,
        weight: 6,
        speed: 4,
      },
      princessPeach : {
        description: "Beautiful princess.",
        height: 12,
        weight: 2,
        speed: 2,
      }
  },
}
/*Convert this JS object into a JSON object. What happens to the nested objects ?
Convert and pretty print this JS object into a JSON object. Hint : Check out the JSON lesson on the platform.
Use your web inspector to add a breakpoint. Check the values of the JSON object in the debugger.*/

const marioGameJson = JSON.stringify(marioGame, null, 3);
console.log(marioGameJson);
//also the nested objects are converted to JSON.
/* from debugger on line 59: 
marioGame
: 
{detail: 'An amazing game!', characters: {…}}
marioGameJson
: 
"{\n   \"detail\": \"An amazing game!\",\n   \"characters\": {\n      \"mario\": {\n         \"description\": \"Small and jumpy. Likes princesses.\",\n         \"height\": 10,\n         \"weight\": 3,\n         \"speed\": 12\n      },\n      \"bowser\": {\n         \"description\": \"Big and green, Hates princesses.\",\n         \"height\": 16,\n         \"weight\": 6,\n         \"speed\": 4\n      },\n      \"princessPeach\": {\n         \"description\": \"Beautiful princess.\",\n         \"height\": 12,\n         \"weight\": 2,\n         \"speed\": 2\n      }\n   }\n}"
Window
Global*/

