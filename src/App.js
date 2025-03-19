import { useState } from "react";
import "./App.css";
import TodoTable from "./components/TodoTable";
import NewTodoForm from "./components/NewTodoForm";

function App() {
  const [todos, setTodos] = useState([
    {
      rowNumber: 1,
      rowDescription: "Feed dog",
      rowAssigned: "Eric",
    },
    {
      rowNumber: 2,
      rowDescription: "Get haircut",
      rowAssigned: "Eric",
    },
  ]);

  const [showTodoForm, setShowTodoForm] = useState(false);

  const addTodo = (assigned, description) => {
    let rowNumber = 0;
    if (todos.length > 0) {
      rowNumber = todos[todos.length - 1].rowNumber + 1;
    } else {
      rowNumber = 1;
    }
    const newTodo = {
      rowNumber: rowNumber,
      rowDescription: description,
      rowAssigned: assigned,
    };
    setTodos([...todos, newTodo]);
  };

  const deleteTodo = (deleteRowNumber) => {
    let filtered = todos.filter(function (value) {
      return value.rowNumber !== deleteRowNumber;
    });
    setTodos(filtered);
  };

  return (
    <div className="mt-5 container">
      <div className="card">
        <div className="card-header">Your Todo's</div>
        <div className="card-body">
          <TodoTable todos={todos} deleteTodo={deleteTodo} />
          <button
            className={showTodoForm ? "btn btn-danger" : "btn btn-primary"}
            onClick={() => setShowTodoForm(!showTodoForm)}
          >
            {showTodoForm ? "Close form" : "New Todo"}
          </button>
          {showTodoForm && <NewTodoForm addTodo={addTodo} />}
        </div>
      </div>
    </div>
  );
}

export default App;
