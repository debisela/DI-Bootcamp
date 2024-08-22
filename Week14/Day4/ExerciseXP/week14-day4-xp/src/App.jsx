import { useState } from 'react'
import './App.css'
import BuggyCounter from './Components/BuggyCounter'
import ErrorBoundary from './ErrorBoundary'
import Color from './Components/Color'

function App() {
  
  return (
    <>
    <ErrorBoundary/>
      <BuggyCounter/>
      <BuggyCounter/>
      <ErrorBoundary/>
      <Color/>
    </>
  )
}

export default App
