import React from "react";
import List from "./List";
import TodoForm from "./TodoForm";

class Todos extends React.Component {
  // need to define render in class components

  state = {
    todos: [
      { id: 1, name: "Learn React", complete: true },
      { id: 2, name: "Learn Rails", complete: false },
      { id: 3, name: "Learn JS", complete: true },
    ],
  };

  // iwant this to return array of jsx
  // renderTodos = () => {
  //   return this.state.todos.map((todo) => {
  //     return <li key={todo.id}>{todo.name}</li>;
  //   });
  // };

  // defining function
  addTodo = (todoName) => {
    console.log("whatisthis");
    console.log(todoName);
    const todo = {
      id: Math.random(),
      name: todoName,
      complete: false,
    };

    // this.state.todos.push(staticTodo) bad
    this.setState({
      todos: [...this.state.todos, todo],
    });
  };
  render() {
    return (
      <div>
        <h1>Todos</h1>
        <TodoForm taco={this.addTodo} />
        <List items={this.state.todos} />
        {/* <div onClick={this.addTodo}>add static todo</div> */}
        {/* <ul>{this.renderTodos()}</ul> */}
      </div>
    );
  }
}

export default Todos;
