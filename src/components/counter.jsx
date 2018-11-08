import React, { Component } from "react";

class Counter extends Component {
  state = {
    value: this.props.value
  };

  constructor(props) {
    super(props);
    this.handleIncrement = this.handleIncrement.bind(this); //bind event handler (setar o this)
  }

  render() {
    return (
      <React.Fragment>
        <span className={this.getBadgeClasses()}>{this.formatCount()}</span>
        <button
          onClick={this.handleIncrement}
          className="btn btn-secondary btn-sm"
        >
          Increment
        </button>
        <br />
      </React.Fragment>
    );
  }

  handleIncrement() {
    this.setState({ value: this.state.value + 1 }); //this.state.count++ nao funciona pq temos que avisar pro React que o State mudou
  }

  getBadgeClasses() {
    let classes = "badge m-2 badge-";
    classes += this.state.value === 0 ? "warning" : "primary";
    return classes;
  }

  formatCount() {
    const { value } = this.state;
    return value === 0 ? "Zero" : value;
  }
}

export default Counter;
