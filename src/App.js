// @flow

import React from 'react';
import logo from './logo.svg';
import './App.css';
import Footer from "./containers/Footer";
import LoadButton from "./components/LoadButton";
import {List} from 'immutable'

type State = {
  footerItems: Array<any>
}

class App extends React.PureComponent<State> {
  constructor(...args) {
    super(...args)
    this.state = {
      footerItems: List()
    }
    console.log('old state:' + JSON.stringify(this.state))
  }

  onClickHandler = () => {
    console.log('on click handler')
    this.setState(({footerItems}) => ({
      footerItems: footerItems.push('a')
    }))
    console.log('new state:' + JSON.stringify(this.state))
  }

  render() {
    const {footerItems} = this.state

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
