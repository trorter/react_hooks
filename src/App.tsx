import React from 'react';
import './App.css';
import ComponentC from "./useContext/ComponentC";

export const UserContent = React.createContext('')

const App = () => {
  return (
    <div className="App">
      <UserContent.Provider value={'Andrei'} >
        <ComponentC/>
      </UserContent.Provider>
    </div>
  )
}

export default App
