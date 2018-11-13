import React, { Component } from "react";
import Counter from "./counter";

class Counters extends Component {
  state = {
    counters: [
      { idCounter: 1, value: 4 },
      { idCounter: 2, value: 0 },
      { idCounter: 3, value: 0 },
      { idCounter: 4, value: 0 }
    ]
  };

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
      <div>
        <button
          onClick={this.handleReset}
          className="btn btn-primary btn-sm m-2"
        >
          Reset
        </button>
        <br />
        {this.state.counters.map(counter => (
          <Counter
            key={counter.idCounter}
            onDelete={this.handleDelete}
            onIncrement={this.handleIncrement}
            counter={counter}
          />
        ))}
      </div>
    );
  }
}

export default Counters;
