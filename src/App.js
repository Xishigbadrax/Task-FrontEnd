import Home from "./components/Home";
import "./App.css";
import Toolbar from "./components/Toolbar";
import Top from "./components/Top";
import Second from "./components/Second";
import Women from "./components/Women";
import Men from "./components/Men";
import ToGet from "./components/ToGet";
import AboutUs from "./components/AboutUs/Index";
import Subscribe from "./components/Subscribe";
import Footer from "./components/Footer";
import { Component } from "react";
import SearchExtend from "./components/SearchExtend";

class App extends Component {
  state = {
    showExtend: false,
  };

  toggleExtend = () => {
    this.setState(() => {
      return { showExtend: true };
    });
  };
  hideExtend = () => {
    this.setState(() => {
      return { showExtend: false };
    });
  };
  render() {
    return (
      <div>
        <Top />
        <Toolbar toggleExtend={this.toggleExtend} />
        <SearchExtend
          showExtend={this.state.showExtend}
          toggleExtend={this.toggleExtend}
        />
        <Home hideExtend={this.hideExtend} />
        <Second />
        <Women />
        <Men />
        <ToGet />
        <AboutUs />
        <Subscribe />
        <Footer />
      </div>
    );
  }
}

export default App;
