import './App.css'
import { FiltersEl } from './components/FiltersEl'
import { InputEl } from './components/InputEl'
import { TodosEl } from './components/TodosEl'
import { useEffect } from 'react'
import { useDispatch } from 'react-redux'
import { hydrateTodos } from './features/todoSlice'

function App() {
  const dispatch = useDispatch()
  useEffect(() => {
      fetch("https://api.airtable.com/v0/appI5bp3TfUEMBRDH/todos?api_key=keyMx6L7Z9LjE5XF8")
        .then(response => response.json())
        .then(data => {
        dispatch(hydrateTodos(data.records))
        })
  }, [dispatch])

  return (
    <div className="App">
      <h1>Todo app with Airtable backend and Redux state</h1>
      <InputEl />
      <TodosEl />
      <FiltersEl />
    </div>
  );
}

export default App;
