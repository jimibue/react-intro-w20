import { useState } from "react";

const TodoFormFunc = (props) => {
  const [todoName, setTodoName] = useState("");

  const handleSubmit = (event) => {
    event.preventDefault();
    props.addTodoCallback(todoName);
    setTodoName("");
  };

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <input
          placeholder="enter todo"
          onChange={(e) => {
            setTodoName(e.target.value);
          }}
          value={todoName}
        />
      </form>
    </div>
  );
};

export default TodoFormFunc;
