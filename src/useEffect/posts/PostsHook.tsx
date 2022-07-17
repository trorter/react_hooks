import {ChangeEvent, useEffect, useState} from "react";
import axios from "axios";

type ServerResponse = {
  body: string
}

const PostsHook = () => {
  const [text, setText] = useState('');
  const [requestText, setRequestText] = useState('');
  const [data, setData] = useState('');

  const buttonClickHandler = () => {
    setRequestText(text)
  }

  const inputHandler = (event: ChangeEvent<HTMLInputElement>) => {
    setText(event.target.value)
  }

  useEffect(() => {
    console.log('useEffect')
    axios.get<ServerResponse>(`https://jsonplaceholder.typicode.com/posts/${requestText}`)
      .then(response => {
        setData(response.data.body)
      })
      .catch(e => {
        console.log(e)
      })
  }, [requestText])


  return (
    <>
      <div>
        <label>
          <span
            style={{
              marginRight: "5px"
            }}
          >
            Enter the post id:
          </span>

          <input
            style={{
              marginRight: "5px"
            }}
            type={"text"}
            value={text}
            onChange={inputHandler}
          />
          <button
            onClick={buttonClickHandler}
          >
            Search
          </button>
        </label>
        <div>
          {data}
        </div>
      </div>
    </>
  )
}

export default PostsHook
