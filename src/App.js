import './App.css'
import { FiltersEl } from './components/FiltersEl'
import { InputEl } from './components/InputEl'
import { TodosEl } from './components/TodosEl'

function App() {
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
