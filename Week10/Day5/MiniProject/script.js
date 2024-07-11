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
document.getElementById('myContent').innerHTML=`<div class="fa-3x">
                <i class="fa-solid fa-sync fa-spin"></i>
                <i class="fa-solid fa-circle-notch fa-spin"></i>
                <i class="fa-solid fa-cog fa-spin"></i>
                <i class="fa-solid fa-cog fa-spin fa-spin-reverse"></i>
                <i class="fa-solid fa-spinner fa-spin-pulse"></i>
                <i class="fa-solid fa-spinner fa-spin-pulse fa-spin-reverse"></i>
              </div><div id="loading">loading...</div>`
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
    console.log(objWorld);
    fetch(objWorld)
.then((response)=>{
    if(response.ok){
        return response.json();
    }
    else{
        throw new Error("there is an error")
    }
})
.then((newObj)=>{
    document.getElementById('myContent').innerHTML = `<h2>${objName}</h2><h3>Height: ${objHeight}</h3><h3>Gender: ${objGender}</h3><h3>Birth Year: ${objYear}</h3><h3>Home World: ${newObj.result.properties.name}</h3>`

})
.catch((err)=>{
    console.log(err);
})
})
.catch((err)=>{
    console.log(err);
})
}
getInfo();
})



