import React, {FC, useState} from "react";
import HookMouse from "./HookMouse";

const MouseContainer: FC = () => {
  const [display, setDisplay] = useState(true)

  const clickHandler = (): void => {
    setDisplay(prevState => !prevState)
  }

  return (
    <div>
      <button onClick={clickHandler} >Toggle mouse</button>
      {display && <HookMouse />}
    </div>
  )
}

export default MouseContainer
