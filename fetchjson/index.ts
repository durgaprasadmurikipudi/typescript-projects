import axios from 'axios';

const url = 'https://jsonplaceholder.typicode.com/todos/1';

interface Todo {
  id: Number,
  completed: boolean,
  title: string
}

axios.get(url).then(resp => {
  const todo = resp.data as Todo;

  console.log(todo.id, todo.completed, todo.title)
});