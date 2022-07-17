import React, {FC, useReducer} from "react";

type CounterState = {
  counter: number
}

enum ActionEnum {
  plus = 'plus',
  minus = 'minus',
  reset = 'reset'
}

type Action =
  | { type: ActionEnum.plus | ActionEnum.minus, payload: number }
  | { type: ActionEnum.reset}


type Reducer<S, A> = (prevState: S, action: A) => S

const CounterReducer: FC = () => {

  const initialState: CounterState = {counter: 0}

  const reduce: Reducer<CounterState, Action> = (prevState: CounterState, action: Action): CounterState => {
    switch (action.type) {
      case ActionEnum.minus:
        return {
          ...prevState,
          counter: prevState.counter - action.payload
        }
      case ActionEnum.plus:
        return {
          ...prevState,
          counter: prevState.counter + action.payload
        }
      case ActionEnum.reset:
        return initialState
    }
    return prevState
  }

  const [state, dispatch] = useReducer(reduce, initialState);

  const buttonClickHandler = (event: React.MouseEvent<HTMLButtonElement>) => {
    dispatch({
      type: event.currentTarget.name as ActionEnum,
      payload: +(event.currentTarget.value)
    })
  }

  return (
    <>
      <div>
        <h4>Current value - {state.counter}</h4>
      </div>
      <div>
        <button
          onClick={buttonClickHandler}
          value={1}
          name={ActionEnum.plus}
        >
          Plus 1
        </button>
        <button
          onClick={buttonClickHandler}
          value={3}
          name={ActionEnum.plus}
        >
          Plus 3
        </button>
      </div>
      <div>
        <button
          onClick={buttonClickHandler}
          value={1}
          name={ActionEnum.minus}
        >
          Minus 1
        </button>
        <button
          onClick={buttonClickHandler}
          value={3}
          name={ActionEnum.minus}
        >
          Minus 3
        </button>
      </div>
      <div>
        <button
          onClick={buttonClickHandler}
          name={ActionEnum.reset}
        >
          Reset
        </button>
      </div>

    </>
  )
}

export default CounterReducer
