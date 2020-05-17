import React from 'react';
import { connect } from 'react-redux';
import { Todo, fetchTodos, deleteTodo } from './actions';
import { StoreState } from './reducers';

interface AppProps {
  todos: Todo[];
  fetchTodos(): any;
  deleteTodo(id: number): any;
};

class App extends React.Component<AppProps> {
  componentDidMount() {
    this.props.fetchTodos();
  }

  renderList(): JSX.Element[] {
    return this.props.todos.map(todo => (<div key={todo.id} onClick={() => this.props.deleteTodo(todo.id)}>{todo.title}</div>));
  }

  render() {
    return (
    <div>{this.renderList()}</div>
    );
  }
};

const mapStateToProps = (state: StoreState): { todos: Todo[] } => {
  return {
    todos: state.todos
  };
};


export default connect(mapStateToProps, { fetchTodos, deleteTodo })(App);