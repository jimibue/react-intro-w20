import Todo from "./Todo";

const List = (props) => {
  const renderTodos = () => {
    return props.items.map((todo) => {
      return (
        <Todo
          key={todo.id}
          id={todo.id}
          name={todo.name}
          complete={todo.complete}
          toggle2={props.toggle1}
          deleteProp={props.deleteProp}
        />
      );
    });
  };

  return <ul>{renderTodos()}</ul>;
};

export default List;
