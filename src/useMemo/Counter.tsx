import React, {FC, useMemo, useState} from "react";

const Counter: FC = () => {

  const [counterOne, setCounterOne] = useState(0)
  const [counterTwo, setCounterTwo] = useState(0)

  const fistButtonClickHandler = () => {
    setCounterOne(prevState => prevState + 1)
  }

  const isEven = useMemo(
    () => {
      let i = 0
      while (i < 1_000_000_000) i++
      return counterOne % 2 === 0
    }, [counterOne])

  const secondButtonClickHandler = () => {
    setCounterTwo(prevState => prevState + 1)
  }

  return (
    <div>
      <div>
        <button
          onClick={fistButtonClickHandler}
          style={{
            marginRight: '5px'
          }}
        >
          Counter one - {counterOne}
        </button>
        <span>{isEven ? 'even' : 'odd'} </span>
      </div>
      <div>
        <button onClick={secondButtonClickHandler}> Counter one - {counterTwo} </button>
      </div>
    </div>
  )
}

export default Counter
