//@flow
import * as React from 'react';

type State = {
  modalVisible: boolean,
  title: string,
  description: string
}

class Form extends React.Component<any, State>{
  constructor() {
    super();
    this.state = {
      modalVisible: false,
      title: '',
      description: ''
    }
    this.handleDescriptionChange = this.handleDescriptionChange.bind(this);
  }

  handleTitleChange = (event: any): void => {
    this.setState({ title: event.target.value });
  }
  handleDescriptionChange = (event: any): void => {
    this.setState({ description: event.target.value });
  }
  handleButtonClick = (): void => {
    if (this.state.title) {
      this.props.addTodo(this.state.title, this.state.description ? this.state.description : "no description ")
      this.setState({
        title: '',
        description: ''
      })
    }
    else {
      alert("Enter title")
    }
  }

  render() {
    return (
      <div>
        <label>Title </label>
        <input type="text" value={this.state.title} onChange={this.handleTitleChange} />
        <label> Description</label>
        <input type="text" value={this.state.description} onChange={this.handleDescriptionChange} />
        <button onClick={
          this.handleButtonClick}>Add TODO</button>
      </div>

    );
  }
}

export default Form