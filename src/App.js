import "./App.css";
import { Component } from "react";
import List from "./components/List";

class App extends Component {
  constructor() {
    super();
    this.state = {
      circles: [`🔴`, `🟠`, `🟡`, `🟢`, `🔵`, `🟣`, `⚪️`, `🟤`],
      squares: [],
      triangles: [],
    };
  }
  render() {
    let { circles, squares, triangles } = this.state;
    return (
      <div className="App">
        <List listArray={circles} />
      </div>
    );
  }
}

export default App;
