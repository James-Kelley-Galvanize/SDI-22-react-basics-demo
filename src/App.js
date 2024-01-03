import "./App.css";
import { Component } from "react";
import List from "./components/List";

class App extends Component {
  constructor() {
    super();
    this.state = {
      circles: [`🔴`, `🟠`, `🟡`, `🟢`, `🔵`, `🟣`, `⚪️`, `🟤`],
      squares: [`🟥`, `🟧`, `🟨`, `🟩`, `🟦`, `🟪`, `⬜️`, `🟫`],
      hearts: [`❤️`, `🧡`, `💛`, `💚`, `💙`, `💜`, `🤍`, `🤎`],
    };
  }
  render() {
    let { circles, squares, hearts } = this.state;
    return (
      <div className="App">
        <List listArray={circles} />
        <List listArray={squares} />
        <List listArray={hearts} />
      </div>
    );
  }
}

export default App;
