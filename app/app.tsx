import * as React from "react";
import * as ReactDOM from "react-dom";

class App extends React.Component<{ greeting: string }> {
  render() {
    return (
      <div>
        <h2>{this.props.greeting}</h2>
      </div>
    );
  }
}
ReactDOM.render(
  <App greeting="Hello, world!" />,
  document.getElementById("app")
);
