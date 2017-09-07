//@flow
import * as constants from "../constants";
import * as Types from "../constants/types"

export interface AddTodo {
  +type: string,
  +data: Types.TodoData
}

export interface FetchTodoAction {
  +type: string,
  +data: Array<Types.TodoData>
}

export interface ToggleTodo {
  type: string,
  data: Types.TodoData
}



export type TodoAction = FetchTodoAction | AddTodo | ToggleTodo;

export function addTodo(data: Types.TodoData): AddTodo {
  return {
    type: constants.ADD_TODO,
    data: data
  };
}

export function fetchTodoAction(todos: Array<Types.TodoData>): FetchTodoAction {
  return {
    type: constants.FETCH_TODO,
    data: todos
  };
}

export function toggleTodoAction(data: Types.TodoData): ToggleTodo {
  return {
    type: constants.TOGGLE_TODO,
    data: data
  };
}
