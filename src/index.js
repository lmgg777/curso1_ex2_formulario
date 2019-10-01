import React from "react";
import ReactDOM from "react-dom";
import UserForm from "./UserForm";

class App extends React.Component {
  render() {
    return <UserForm />;
  }
}
ReactDOM.render(<App />, document.querySelector("#root"));
