import React, {FC, useCallback, useState} from "react";
import Count from "./Count";
import Button from "./Button";
import Title from "./Title";

const ContainerComponent: FC = () => {
  const [age, setAge] = useState(10)
  const [salary, setSalary] = useState(50_000);

  const incrementAgeHandler = useCallback(
    () => {
      setAge(prevState => prevState + 1)
    },
    [age],
  )

  const incrementSalaryHandler = useCallback(
    () => {
      setSalary(prevState => prevState + 1_000)
    },
    [salary],
  )

  return (
    <>
      <Title />

      <Count name={"Age"} value={age} />
      <Button handler={incrementAgeHandler}>
        Increment age
      </Button>

      <Count name={"Salary"} value={salary} />
      <Button handler={incrementSalaryHandler}>
        Increment salary
      </Button>
    </>
  )
}

export default ContainerComponent
