//@flow
import * as React from "react";
import logo from "../logo.svg";
import "../App.css";
import GoogleLogin from "react-google-login";
import * as HttpUtils from "../Utils/httpUtils";
import { CLIENT_ID } from "../constants/clientId";

import * as Types from "../constants/types"
import { withRouter } from "react-router-dom"



type Props = any

class AppView extends React.Component<Props, null> {
  responseGoogle = (response: Types.GoogleResponse): any => {
    localStorage.setItem("googleId", response.profileObj.googleId);

    console.log(response)
    HttpUtils.get("http://localhost:3000/data")
      .then(dataResponse => {
        let data: Types.TodoData = dataResponse.data;
        console.log(data);
        this.props.history.push("./nextPage")
      })
      .catch(err => console.log(err));
  };

  postData = () => {
    let count: number = 0
    let postData: Types.TodoData = {
      googleId: localStorage.getItem("googleId"),
      description: "description",
      id: count,
      isComplete: false,
      title: ""

    }
    HttpUtils.post("http://localhost:3000/data", postData)
      .then(response => {
        let data: Types.TodoData = response.data;
        console.log(data)
        count++
      })
  }

  render() {
    return (
      <div className="App">
        <div className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h2>Welcome to Todo Application</h2>
          <h3>Helps To Remind You</h3>
        </div>
        <GoogleLogin
          clientId={CLIENT_ID}
          buttonText="Google Login"
          onSuccess={this.responseGoogle}
          onFailure={this.responseGoogle}
        />
      </div>
    );
  }
}

export default withRouter(AppView);
