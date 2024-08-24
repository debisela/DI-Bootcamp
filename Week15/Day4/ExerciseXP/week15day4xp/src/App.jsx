import { useState } from 'react'
import Context from './Components/Context'
import { ThemeProvider } from './Components/ThemeContext';
import ThemeSwitcher from './Components/ThemeSwitcher';
import CharacterCounter from './Components/CharacterCounter';
import TodoList from './Components/Todolist';

import './App.css'

// function ThemeSwitcher() {
//   const { theme, toggleTheme } = useTheme();

//   return (
//     <div>
//       <button onClick={toggleTheme}>Toggle Theme</button>
//       <p>Current Theme: {theme}</p>
//     </div>
//   );
// }

function App() {
  

  // return (
  //   <>
  //     <ThemeProvider>
  //     <div className="App">
  //       <h1>Theme Switcher Example</h1>
  //       <ThemeSwitcher />
  //     </div>
  //   </ThemeProvider>
  //   </>
  // )

  // return (
  //   <div className="App">
  //     <CharacterCounter />
  //   </div>
  // );

  return (
    <div className="App">
      <TodoList />
    </div>
  );


}

export default App
