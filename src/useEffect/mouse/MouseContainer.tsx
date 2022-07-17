import React, {useState} from "react";
import HookMouse from "./HookMouse";

const MouseContainer = () => {
  const [display, setDisplay] = useState(true)

  const clickHandler = (): void => {
    setDisplay(!display)
  }

  return (
    <div>
      <button onClick={clickHandler} >Toggle mouse</button>
      {display && <HookMouse />}
    </div>
  )
}

export default MouseContainer
