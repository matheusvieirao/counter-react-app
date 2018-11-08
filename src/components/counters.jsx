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

  handleDelete = idCounter => {
    const newCounters = this.state.counters.filter(
      c => c.idCounter !== idCounter
    );
    this.setState({ counters: newCounters });
  };

  render() {
    return (
      <div>
        {this.state.counters.map(counter => (
          <Counter
            key={counter.idCounter}
            onDelete={this.handleDelete}
            counter={counter}
          />
        ))}
      </div>
    );
  }
}

export default Counters;
