import React, {FC, useContext} from "react";
import {UserContent} from "../App";

const ComponentA: FC = () => {
  const context = useContext(UserContent);
  return (
    <div>
      {context.userName}
    </div>
  )
}

export default ComponentA
