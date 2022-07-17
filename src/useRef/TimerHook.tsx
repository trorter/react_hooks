import React, {FC, useEffect, useRef, useState} from "react";

const TimerHook: FC = () => {
  const [timer, setTimer] = useState(0)
  const intervalRef: {current: any} = useRef()

  const stopTimerHandler = () => {
    clearInterval(intervalRef.current)
  }

  useEffect(() => {
    intervalRef.current = setInterval(() => {
      setTimer(prevState => prevState + 1)
    }, 1_000)

    return () => {
      clearInterval(intervalRef.current)
    }
  }, [])


  return (
    <>
      <div>
        <span>Timer - {timer}</span>
      </div>
      <div>
        <button onClick={stopTimerHandler}>Stop the timer</button>
      </div>
    </>
  )
}

export default TimerHook
