//@flow
import type { TodoAction } from "../actions";
import * as types from "../constants/index";
import * as Types from "../constants/types"

type Action = {
  type: string,
  data: any
};

// let b: any;
// let a: TodoAction;
// let c: OtherAction;


// a = <TodAction> b

// //
// c= <OtherAction> b


// export const increment = createAction('INCREMENT')

// dispatch(/* { type: 'INCREMENT', payload: }}*/ increment()); // Action

export default function todo(state: Array<Types.TodoData> = [], action: Action) {
  switch (action.type) {
    case types.ADD_TODO:
      return [...state, (action.data:Types.TodoData)];

    case types.FETCH_TODO:
      return (action.data:Array<Types.TodoData>);

    case types.TOGGLE_TODO:
      return (state.map(
        todo =>
          todo.id === action.data.id
            ? { ...todo, isComplete: !todo.isComplete }
            : todo
      ):Array<Types.TodoData>);

    default:
      return state;
  }
}
