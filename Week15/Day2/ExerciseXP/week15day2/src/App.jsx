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

  console.log(data);
  console.log(dataEx3.SocialMedias);
  
  
  // return(
  //   <>
  //   <h1>Hi This is a title</h1>
  //   <div><PostList data={data}/></div>
  //   </>
  // )


  return(
    <>
    <div><Example1 data={dataEx3}/></div>
    <div><Example2 data={dataEx3}/></div>
    <div><Example3 data={dataEx3}/></div>
    </>
  )
}

export default App
