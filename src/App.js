import React, { Component } from "react";
import NavBar from "./components/navbar";
import Counters from "./components/counters";
import "./App.css";

class App extends Component {
  state = {
    counters: [
      { idCounter: 1, value: 4 },
      { idCounter: 2, value: 0 },
      { idCounter: 3, value: 0 },
      { idCounter: 4, value: 0 }
    ]
  };

  constructor() {
    super();
    console.log("app - constructor");
  }

  //  componentDidMount(){}    //lugar para se fazer chamadas para o servidor com Ajax

  handleReset = () => {
    const counters = this.state.counters.map(c => {
      c.value = 0;
      return c;
    });
    this.setState({ counters });
  };

  handleIncrement = counter => {
    const counters = [...this.state.counters]; // "..." clones the array
    const index = counters.indexOf(counter);
    counters[index] = { ...counter };
    counters[index].value++;
    this.setState({ counters });
  };

  handleDelete = idCounter => {
    const newCounters = this.state.counters.filter(
      c => c.idCounter !== idCounter
    );
    this.setState({ counters: newCounters });
  };

  render() {
    return (
      <React.Fragment>
        <NavBar
          totalCounters={this.state.counters.filter(c => c.value > 0).length}
        />
        <main className="container">
          <Counters
            onReset={this.handleReset}
            onIncrement={this.handleIncrement}
            onDelete={this.handleDelete}
            counters={this.state.counters}
          />
        </main>
      </React.Fragment>
    );
  }
}

export default App;
