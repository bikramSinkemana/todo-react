//@flow
import * as React from "react";
import * as Types from "../constants/types"
// import tick from '../images/tick.png'
// import blank from '../images/blank.png'
// import AlertBox from './AlertBox'


type TodoProps = {
  todo: Types.TodoData,
  toggle: any
};

// interface TodoInterface{
//   title: string
//   description: string
//   isComplete: boolean
// }
const Todo = (props: TodoProps) => (
  <div>{console.log("loading props", props)}
    <div
      onClick={() => {
        props.toggle(props.todo);
      }}
    >

      {props && props.todo && props.todo.description}{" "}
      {props && props.todo && props.todo.googleId}

      {props.todo.isComplete ? <p>completed</p> : <p>baki xa</p>}
    </div>
  </div>
);

export default Todo;
