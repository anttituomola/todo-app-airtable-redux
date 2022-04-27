import { useState, useRef, useEffect } from "react"
import { useDispatch } from "react-redux"
import { addTodoThunk } from "../backendSync/addTodoThunk";

export const InputEl = () => {
  const inputField = useRef(null)
  const [value, setValue] = useState("")
  const dispatch = useDispatch()

  useEffect(() => {
    if (inputField.current) {
      inputField.current.focus()
    }
  }, [])

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
      }
      setValue("")
      dispatch(addTodoThunk(todo))
    }
  }

  // There's a bug: when we're submitting a new todo, it get's dispatched to Airtable, and in there, an ID will be created.
  // This ID is now, however, update immidiately back to Redux state, so when we try to delete or edit it, it will fail to update the data in Airtable.
  // Possible solution: fetch updated data from Airtable, and update Redux state with it after every dispatch?

  return (
    <div className="inputEl">
      <input className="inputField" 
        ref={inputField}
        value={value} type="text" 
        placeholder="Add todo" 
        onChange={(event) => setValue(event.target.value)} 
        onKeyDown={listenForEnter}/>
      <button className="inputButton" onClick={handleSubmit}>Add</button>
    </div>
  )
}
