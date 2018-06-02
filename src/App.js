import React, {Component} from 'react';
import logo from './logo.svg';
import './App.css';
import Footer from "./containers/Footer";
import LoadButton from "./components/LoadButton";

class App extends Component {
  onClickHandler = () => {
    console.log('on click handler')
  }

  render() {
    const {footerItems} = this.props

    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo"/>
          <h1 className="App-title">Welcome to React</h1>
        </header>
        <LoadButton
          onClickHandler={this.onClickHandler}
        />
        <p className="App-intro">
          To get started, edit <code>src/App.js</code> and save to reload.
        </p>
        <Footer
          className="footer"
          items={footerItems}
        />
      </div>
    );
  }
}

export default App;
