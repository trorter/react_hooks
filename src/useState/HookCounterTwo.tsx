import React, {useState} from "react";

type Item = {
  key: number
  value: string
}

const HookCounterTwo = () => {
  const [items, setItems] = useState<Array<Item>>([]);

  const addNumber = () => {
    setItems([...items, {
      key: items.length,
      value: (Math.floor(Math.random() * 10) + 1).toString()
    }])
  }

  return (
    <div>
      <button onClick={addNumber} >Add a number</button>
      <ul>
        {items.map(item => (
          <li key={item.key} >{item.value}</li>
        ))}
      </ul>
    </div>
  )
}

export default HookCounterTwo