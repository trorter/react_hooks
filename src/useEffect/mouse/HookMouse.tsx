import React, {useEffect, useState} from "react";

const HookMouse = () => {
  const [coords, setCoords] = useState({x: 0, y: 0});

  const logMousePosition = (event: MouseEvent) => {
    setCoords({x: event.clientX, y: event.clientY})
  }

  useEffect(() => {
    window.addEventListener('mousemove', logMousePosition)

    return () => {
      window.removeEventListener('mousemove', logMousePosition)
    }
  }, [])


  return (
    <div>
      <h4> Your coordinate [{coords.x},{coords.y}]</h4>
    </div>
  )
}

export default HookMouse
