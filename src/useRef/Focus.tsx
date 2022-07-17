import React, {FC, useEffect, useRef} from "react";

const Focus: FC = () => {

  const inputRef = useRef<HTMLInputElement>(null);

  useEffect(() => {
    inputRef.current?.focus()
  }, [])

  return (
    <div>
      <input
        type={'text'}
        ref={inputRef}
      />
    </div>
  )
}

export default Focus
