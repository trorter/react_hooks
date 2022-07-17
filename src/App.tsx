import React from 'react';
import './App.css';
import Focus from "./useRef/Focus";

export type UserContextType = {
  userName: string
}

export const UserContent = React.createContext<UserContextType>({userName: ''})

const App = () => {
  return (
    <div className="App">
      <UserContent.Provider value={{userName: 'Andrei'}} >
        <Focus />
      </UserContent.Provider>
    </div>
  )
}

export default App
