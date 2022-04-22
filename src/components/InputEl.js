import { useState } from "react"
import { addTodo } from "../features/todoSlice"
import { useDispatch } from "react-redux"
import {addTodoThunk} from "../backendSync/addTodoThunk";

export const InputEl = () => {
    const [value, setValue] = useState("")
    const dispatch = useDispatch()

    const handleSubmit = () => {
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

  return (
    <div>
        <input className="inputField" value={value} type="text" placeholder="Add todo" onChange={(event) => setValue(event.target.value)}/>
        <button className="inputButton" onClick={handleSubmit}>Add todo!</button>
    </div>
  )
}
