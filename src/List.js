import Todo from "./Todo";

const List = (props) => {
  const renderTodos = () => {
    return props.items.map((todo) => {
      return <Todo key={todo.id} name={todo.name} />;
    });
  };

  return <ul>{renderTodos()}</ul>;
};

export default List;
