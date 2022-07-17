import React, {FC, useState} from "react"

const HookCounter: FC = () => {
  const [name, setName] = useState({firstName: '', lastName: ''})

  return (
    <div>
      <form>
        <div style={{
          marginBottom: "5px"
        }}>
          <label>
            <span style={{
              marginRight: "5px"
            }}>
              First name:</span>
            <input type={"text"} onChange={(event) => setName({...name, firstName: event.target.value})}/>
          </label>
        </div>

        <div style={{
          marginBottom: "5px"
        }}>
          <label>
            <span style={{
              marginRight: "5px"
            }}>
              Last name:
            </span>
            <input type={"text"} onChange={(event) => setName({...name, lastName: event.target.value})}/>
          </label>
        </div>

        <div>
          <h2>Your first name is - {name.firstName}</h2>
          <h2>Your last name is - {name.lastName}</h2>
        </div>

      </form>
    </div>
  )
}

export default HookCounter
