import './App.css'
import { FiltersEl } from './components/FiltersEl'
import { InputEl } from './components/InputEl'
import { TodosEl } from './components/TodosEl'
import { useEffect } from 'react'
import { useDispatch } from 'react-redux'
import hydrateTodosThunk from "./backendSync/hydrateTodosThunk";

function App() {
  const dispatch = useDispatch()
  useEffect(() => {
      dispatch(hydrateTodosThunk());
  }, [dispatch])

  return (
    <div className="App">
      <h1>Todo app</h1>
      <h3>with Airtable backend and Redux state</h3>
      <InputEl />
      <TodosEl />
      <FiltersEl />
    </div>
  );
}

export default App;
