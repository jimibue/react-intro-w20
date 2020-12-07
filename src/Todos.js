import React from "react";
import List from "./List";
import TodoForm from "./TodoForm";
import TodoFormFunc from "./TodoFormFunc";

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
  toggle = (id) => {
    let updateTodos = this.state.todos.map((t) => {
      if (t.id !== id) {
        return t;
      }
      return { ...t, complete: !t.complete };
    });

    this.setState({
      todos: updateTodos,
    });
  };

  delete = (id) => {
    let filteredTodos = this.state.todos.filter((t) => t.id !== id);

    this.setState({ todos: filteredTodos });
  };

  render() {
    return (
      <div>
        <h1>Todos</h1>
        {/* <TodoForm taco={this.addTodo} /> */}
        <TodoFormFunc addTodoCallback={this.addTodo} />
        <List
          deleteProp={this.delete}
          toggle1={this.toggle}
          items={this.state.todos}
        />
        {/* <div onClick={this.addTodo}>add static todo</div> */}
        {/* <ul>{this.renderTodos()}</ul> */}
        <div onClick={() => this.toggle(1)}>static toggle</div>
        <div onClick={() => this.delete(1)}>static delete</div>
      </div>
    );
  }
}

export default Todos;
