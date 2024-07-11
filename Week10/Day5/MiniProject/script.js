//API url:https://www.swapi.tech/

/*display:
name: result.properties.name
height: result.properties.height
gender: result.properties.gender
birth year: result.properties.birth_year
home world: result.properties.homeworld -> gives url, need to fetch from url: obj.result.name
random:83 different oprions:
obj.uid: Math.floor(Math.random()*83)+1
url: https://www.swapi.tech/api/people/ + random nr*/


document.getElementById('search').addEventListener('click', function(event){



let randomNr = Math.floor(Math.random()*83)+1;
console.log(randomNr);

const getInfo = () =>{
let url =`https://www.swapi.tech/api/people/${randomNr}`
fetch(url)
.then((response)=>{
    if(response.ok){
        return response.json();
    }
    else{
        throw new Error("there is an error")
    }
})
.then((obj)=>{
    let objName = obj.result.properties.name;
    let objHeight = obj.result.properties.height;
    let objGender = obj.result.properties.gender;
    let objYear = obj.result.properties.birth_year;
    let objWorld = obj.result.properties.homeworld;
    console.log(objName);
    document.getElementById('myContent').innerHTML = `<h1>${objName}</h1><h3>${objHeight}</h3><h3>${objGender}</h3><h3>${objYear}</h3><h3>${objWorld}</h3>`

})
.catch((err)=>{
    console.log(err);
})
}
getInfo();
})

