import { useState } from "react"
import { useDispatch } from "react-redux"
import { addTodoThunk } from "../backendSync/addTodoThunk";

export const InputEl = () => {
  const [value, setValue] = useState("")
  const dispatch = useDispatch()

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
      <input className="inputField" value={value} type="text" placeholder="Add todo" onChange={(event) => setValue(event.target.value)} />
      <button className="inputButton" onClick={handleSubmit}>Add</button>
    </div>
  )
}
