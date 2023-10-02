import "./App.css";
import { useState } from "react";

const App = () => {
const [newItem , setNewItem] = useState("");
const [todos , setTodos] = useState([]);

const handleSubmit = (e) => {
e.preventDefault();
setTodos(currentTodos => {

  return [
    ...currentTodos,
    {id: crypto.randomUUID() , title:newItem , completed:false},
  ]
})
setNewItem('')
}

  return (
    <>
      <form onSubmit={handleSubmit} className="new-item-form">
        <div className="form-row">
          <label htmlFor="item">New item</label>
          <input  value={newItem} onChange={e => setNewItem(e.target.value)}  type="text" id="item" />
        </div>
        <button className="btn">Add</button>
      </form>
      <h1 className="header">Todos List</h1>

      <ul className="list">
{todos.map(todo  => {

return (
 
<li key={todo.id}>
<label>
  <input type='checkbox' checked={todo.completed} />
  {todo.title}
</label>
<button className="btn btn-danger">Delete</button>
</li>

)
})}
</ul>

    </>
  );
};

export default App;
