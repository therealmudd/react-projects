import React, { useState } from "react";
import Task from "./components/Task";

function App() {
  let [tasks, setTasks] = useState([{ id: 1, text: "Test" }]);

  const addTask = (text: string) => {
    let id = tasks.length + 1;
    setTasks([...tasks, { id: Date.now(), text: text }]);
  };

  const deleteTask = (id: number) => {
    setTasks(tasks.filter(task => task.id != id));
  };

  return (
    <div>
      <h1>To-do List App</h1>
      {tasks.length === 0 && <i>No tasks...</i>}
      <ul className="list-group">
        {tasks.map((task, index) => (
          <Task onDelete={() => deleteTask(task.id)} key={index.toString()} id={index.toString()}>
            {task.text}
          </Task>
        ))}
      </ul>

      <br></br>

      <form
        onSubmit={(event) => {
          event.preventDefault();
          const input = event.currentTarget.elements.namedItem("test");
          if (input && input.value.trim() != "") {
            addTask(input.value.trim());
            input.value = "";
          }
        }}
      >
        <div className="form-group">
          <label htmlFor="">New task:</label>
          <input
            type="text"
            name="test"
            className="form-control"
            placeholder="Enter to-do..."
          />
          <button type="submit" className="btn btn-primary">
            Add task
          </button>
        </div>
      </form>
    </div>
  );
}

export default App;
