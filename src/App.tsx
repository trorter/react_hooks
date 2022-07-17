import React from 'react';
import './App.css';
import Counter from "./useMemo/Counter";

export type UserContextType = {
  userName: string
}

export const UserContent = React.createContext<UserContextType>({userName: ''})

const App = () => {
  return (
    <div className="App">
      <UserContent.Provider value={{userName: 'Andrei'}} >
        <Counter />
      </UserContent.Provider>
    </div>
  )
}

export default App
