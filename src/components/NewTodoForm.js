import { useState } from "react";

function NewTodoForm(props) {
  const [assigned, setAssigned] = useState("");
  const [description, setDescription] = useState("");

  const assignedChange = (event) => {
    setAssigned(event.target.value);
  };

  const descriptionChange = (event) => {
    setDescription(event.target.value);
  };

  const submitTodo = () => {
    if (description !== "" && assigned !== "") {
      props.addTodo(assigned, description);
      setAssigned("");
      setDescription("");
    }
  };

  return (
    <div className="mt-5 container">
      <form>
        <div className="mb-3">
          <label className="form-label">Assigned</label>
          <input
            className="form-control"
            type="text"
            required
            onChange={assignedChange}
            value={assigned}
          />
        </div>
        <div className="mb-3">
          <label className="form-label">Description</label>
          <textarea
            className="form-control"
            rows={3}
            required
            onChange={descriptionChange}
            value={description}
          ></textarea>
        </div>
        <button
          type="button"
          className="btn btn-primary mt-3"
          onClick={submitTodo}
        >
          Add Todo
        </button>
      </form>
    </div>
  );
}

export default NewTodoForm;
