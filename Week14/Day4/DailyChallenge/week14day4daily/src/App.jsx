import { useState } from 'react'
import './App.css'

function App() {
  const [name, setName] = useState("");
  const [lastname, setLastname] = useState("");
  const [age, setAge] = useState("");
  const [gender, setGender] = useState("");
  const [destination, setDestination]=useState("");
  const [dietaryRestrictions, setDietaryRestrictions] = useState({
    nutsfree: false,
    lactosefree: false,
    vegan: false,
  });

  const handleCheck = (e) => {
    const { name, checked } = e.target;
    setDietaryRestrictions((prevState) => ({
      ...prevState,
      [name]: checked,
    }));
  };



  const handleSubmit=(e)=>{
    e.preventDefault();
    console.log(name, lastname, age, gender, destination, dietaryRestrictions);
    
  }

  return (
    <>
    <h2>Sample form</h2>
    <form onSubmit={handleSubmit}>
    <input 
    type="text" placeholder='First Name' 
    onChange={(e)=>setName(e.target.value)}></input>
    <br/>
    <input 
    type="text" placeholder='Last Name' 
    onChange={(e)=>setLastname(e.target.value)}></input>
    <br/>
    <input 
    type="text" placeholder='Age' 
    onChange={(e)=>setAge(e.target.value)}></input>
    <br/>
    <input 
    type='radio' 
    name='gender' 
    value='male'
    onChange={(e)=>setGender(e.target.value)}
    ></input>Male
    <br/>
    <input 
    type='radio' 
    name='gender' 
    value='female'
    onChange={(e)=>setGender(e.target.value)}></input>
    Female
    <div>Select your destination</div>
    <select onChange={(e)=>setDestination(e.target.value)} value={destination}>
    <option value="" disabled>Please choose destination</option>
      <option value="thailand">Thailand</option>
      <option value="brazil">Brazil</option>
      <option value="japan">Japan</option>
    </select>
    <div>Dietary restrictions</div>
    <input 
    type="checkbox" 
    name='nutsfree' 
    checked={dietaryRestrictions.nutsfree} 
    onChange={handleCheck}></input>
    nutsfree
    <br/>
    <input 
    type="checkbox" 
    name='lactosefree' 
    checked={dietaryRestrictions.lactosefree} 
    onChange={handleCheck}></input>
    lactosefree
    <br/>
    <input 
    type="checkbox" 
    name='vegan' 
    checked={dietaryRestrictions.vegan}
    onChange={handleCheck}></input>
    vegan
    <br/>
    <input type='submit' value={"Submit"}></input>
    <h3>Entered Information</h3>
    <div>Your name: {name} {lastname}</div>
    <div>Your age: {age}</div>
    <div>Your gender: {gender}</div>
    <div>Your destination: {destination}</div>
    <div>Your dietary restrictions:</div>
    <div>{dietaryRestrictions.nutsfree && <span>nutsfree</span>}</div>
    <div>{dietaryRestrictions.lactosefree && <span>lactosefree</span>}</div>
    <div>{dietaryRestrictions.vegan && <span>vegan</span>}</div>
  
    </form>
   
    </>
  )
}

export default App
