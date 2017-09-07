//@flow
import * as React from "react";
import { connect } from "react-redux";
import { addTodo, fetchTodoAction, toggleTodoAction } from "../actions/index";
// import "./AppContainer.css";
import * as httpUtil from "../Utils/httpUtils";
import AppView from "./AppView"
import Todo from "./todo";
import Form from "./Form";
import * as Types from "../constants/types"

type Props = {
  increaseTodoCount: any,
  fetchTodo: any,
  todoCount1: Array<Types.TodoData>,
  toggleTodo: any
};

type State = {
  title: string,
  description: string,
  isComplete: boolean
};

class AppContainer extends React.Component<Props, State> {
  constructor(props: Props) {
    super(props);
    this.state = {
      title: "",
      description: "",
      isComplete: false
    };
  }

  addtodoCounter(title: string, description: string) {
    let data = {
      title: title,
      googleId: localStorage.getItem("googleId"),
      description: description,
      isComplete: false
    };
    httpUtil
      .post("http://localhost:3000/data", data)
      .then(response => {
        this.setState({
          title: "",
          description: ""
        });
        let data = response.data;
        this.props.increaseTodoCount(data);
        console.log("post gareko", data)
      });
  }

  changeIsComplete(todo: Types.TodoData) {
    if (todo.isComplete) {
      todo.isComplete = false;
    } else {
      todo.isComplete = true;
    }
    httpUtil
      .put("http://localhost:3000/data", todo, todo.id)
      .then(response => {
        let data = response.data;
        this.props.toggleTodo(data);
      });
  }

  componentDidMount() {
    httpUtil
      .get("http://localhost:3000/data")
      .then(response => {
        let data = response.data.filter(todo => todo.googleId == localStorage.getItem("googleId"));
        this.props.fetchTodo(data);

      })
      .catch(err => console.log(err));
  }

  render() {
    return (
      <div className="app-container">
        <Form
          addTodo={(title: string, description: string) => {
            this.addtodoCounter(title, description);
          }}
        />
        <div>
          <span>TODO LIST
          </span>
          <div>
            {
              this.props.todoCount1[0] ? (
                this.props.todoCount1.map((todo: Types.TodoData, i: number) => (
                  <Todo
                    key={i}
                    todo={todo}
                    toggle={() => {
                      this.changeIsComplete(todo);
                    }}
                  />
                ))
              ) : (
                  <span>Loading ...</span>
                )
            }
          </div>
        </div>

      </div>
    );
  }
}

function mapStateToProps(state: any) {
  return {
    todoCount1: state || []
  };
}

export default connect(mapStateToProps, dispatch => ({
  toggleTodo(data: Types.TodoData) {
    dispatch(toggleTodoAction(data));
  },
  increaseTodoCount(todo: Types.TodoData) {
    dispatch(addTodo(todo));
  },
  fetchTodo(todos: Array<Types.TodoData>) {
    dispatch(fetchTodoAction(todos));
  }
}))(AppContainer);
