import React, {useContext} from "react";
import {UserContent} from "../App";

const ComponentA = () => {
  const context = useContext(UserContent);
  return (
    <div>
      {context}
    </div>
  )
}

export default ComponentA
