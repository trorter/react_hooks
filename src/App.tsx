import React from 'react';
import './App.css';
import TimerHook from "./useRef/TimerHook";

export type UserContextType = {
  userName: string
}

export const UserContent = React.createContext<UserContextType>({userName: ''})

const App = () => {
  return (
    <div className="App">
      <UserContent.Provider value={{userName: 'Andrei'}} >
        <TimerHook />
      </UserContent.Provider>
    </div>
  )
}

export default App
