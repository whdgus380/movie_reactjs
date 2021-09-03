import React from "react";
// import PropTypes from "prop-types";

class App extends React.Component {
    state = {
        count: 0,
    };
    add = () => {
        // this.setState({ count: this.state.count + 1 });
        this.setState((current) => ({ count: current.count + 1 }));
        // this.state.count += 1;
    };
    minus = () => {
        // this.state.count -= 1;
        this.setState({ count: this.state.count - 1 });
    };

    render() {
        return (
            <div>
                <h1>the number is {this.state.count}</h1>
                <button onClick={this.add}>Add</button>
                <button onClick={this.minus}>Minus</button>
            </div>
        );
    }
}

export default App;
