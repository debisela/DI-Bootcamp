import { useState } from 'react'
import './App.css'
import ErrorBoundary from './ErrorBoundary'
import {Routes, Route, NavLink} from "react-router-dom";
import HomeScreen from './components/Homescreen';
import ProfileScreen from './components/ProfileScreen';
import ShopScreen from './components/ShopScreen';
import Navbar from './components/Navbar';
import PostList from './components/PostList';
import data from "./components/data.json"
import dataEx3 from "./components/dataEx3.json"
import Example1 from './components/Example1';
import Example2 from './components/Example2';
import Example3 from './components/Example3';

function App() {
  
  // return (
  //   <>
  //   <Navbar/>
  //   <ErrorBoundary>
  //   <Routes>
  //   <Route path='/' element={<HomeScreen/>}/>
  //   </Routes>
  //   </ErrorBoundary>
  //   <ErrorBoundary>
  //   <Routes>
  //   <Route path='/profile' element={<ProfileScreen/>}/>
  //   </Routes>
  //   </ErrorBoundary>
  //   <ErrorBoundary>
  //   <Routes>
  //   <Route path='/shop' element={<ShopScreen/>}/>
  //   </Routes>
  //   </ErrorBoundary>
  //   </>
  // )

  // console.log(data);
  // console.log(dataEx3.SocialMedias);
  
  
  // return(
  //   <>
  //   <h1>Hi This is a title</h1>
  //   <div><PostList data={data}/></div>
  //   </>
  // )


  // return(
  //   <>
  //   <div><Example1 data={dataEx3}/></div>
  //   <div><Example2 data={dataEx3}/></div>
  //   <div><Example3 data={dataEx3}/></div>
  //   </>
  // )

const webhookURL = "https://webhook.site/#!/view/cdb07d40-23bb-4155-8be1-e03e3c823b9a/5063b256-cad4-4d76-95e4-6fb59a3159f1/1"

const post = async()=>{
  const data = {
    key1: 'myusername',
email: 'mymail@gmail.com',
name: 'Isaac',
lastname: 'Doe',
age: 27
  };

  try{
    const response = await fetch(webhookURL,{
      method:'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      mode: 'no-cors',
      body: JSON.stringify(data),
    });

    const result = await response.json();

    console.log("response:", result);
  } catch (error){
    console.log(error);
    
  }
    
  };


return(
  <>
  <button onClick={post}>get data</button>
  </>
)

}

export default App

//exercise 4 not working... 
