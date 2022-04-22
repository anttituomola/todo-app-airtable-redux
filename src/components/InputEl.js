import { useState } from "react"
import { useDispatch } from "react-redux"
import { addTodoThunk } from "../backendSync/addTodoThunk";

export const InputEl = () => {
  const [value, setValue] = useState("")
  const dispatch = useDispatch()

  const listenForEnter = (e) => {
    console.log("KEY")
    if (e.key === "Enter") {
      handleSubmit()
    }
  }

  const handleSubmit = () => {
    if (value) {
      const todo = {
        fields: {
          todoText: value,
          done: false,
        },
        id: Date.now(),
      }
      setValue("")
      dispatch(addTodoThunk(todo))
    }
  }

  return (
    <div className="inputEl">
      <input className="inputField" value={value} type="text" placeholder="Add todo" onChange={(event) => setValue(event.target.value)} onKeyDown={listenForEnter}/>
      <button className="inputButton" onClick={handleSubmit}>Add</button>
    </div>
  )
}
