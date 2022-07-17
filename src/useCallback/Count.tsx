import React, {FC, memo} from "react";

type TitlePropsType = {
  name: string
  value: number
}

const Count: FC<TitlePropsType> = (props) => {
  // console.log('Count ', props.name)

  return (
    <div>
      <h4>Your {props.name} - {props.value}</h4>
    </div>
  )
}

export default memo(Count)
