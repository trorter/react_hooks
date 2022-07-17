import React, {FC, memo} from "react";

type ButtonPropsType = {
  handler: () => void
  children: string | JSX.Element | JSX.Element[]
}

/**
 * Universal button component
 * @param props
 * @constructor
 */
const Button: FC<ButtonPropsType> = (props: ButtonPropsType) => {

  return (
    <>
      <button onClick={props.handler} >{props.children}</button>
    </>
  )
}

export default memo(Button)
