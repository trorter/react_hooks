import React from 'react';
import './App.css';
import ContainerComponent from "./useCallback/ContainerComponent";

export type UserContextType = {
  userName: string
}

export const UserContent = React.createContext<UserContextType>({userName: ''})

const App = () => {
  return (
    <div className="App">
      <UserContent.Provider value={{userName: 'Andrei'}} >
        <ContainerComponent />
      </UserContent.Provider>
    </div>
  )
}

export default App
