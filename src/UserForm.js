import React from "react";

const marginStyle = { marginTop: "20px" };

class UserForm extends React.Component {
  render() {
    return (
      <div className="ui container segment" style={marginStyle}>
        <div className="ui form">
          <div className="field">
            <label>Enter user name: </label>
            <input type="text" />
          </div>
        </div>
      </div>
    );
  }
}

export default UserForm;
