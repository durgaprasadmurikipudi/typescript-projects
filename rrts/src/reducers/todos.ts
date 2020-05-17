import { Todo, SetTodoAction, DeleteTodoAction } from '../actions';
import { ActionTypes } from '../actions/types';

export const todosReducer = (state: Todo[] = [], action: SetTodoAction | DeleteTodoAction): Todo[] => {
  switch(action.type) {
    case ActionTypes.setTodos:
      return action.payload;
    case ActionTypes.deleteTodo:
      return state.filter((todo: Todo) => todo.id !== action.payload);
    default: 
      return state;
  }
}