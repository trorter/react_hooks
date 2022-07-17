import React from 'react';
import './App.css';
import CounterReducer from "./useReducer/CounterReducer";

export type UserContextType = {
  userName: string
}

export const UserContent = React.createContext<UserContextType>({userName: ''})

const App = () => {
  return (
    <div className="App">
      <UserContent.Provider value={{userName: 'Andrei'}} >
        <CounterReducer />
      </UserContent.Provider>
    </div>
  )
}

export default App
