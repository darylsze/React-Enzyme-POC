import React from "react";

export default class Footer extends React.PureComponent {
  constructor(...args) {
    super(...args)
    this.state = {
      items: []
    }
  }

  render() {
    return (
      <ul>
        {this.state.items.map((item,index) => {
          return <li key={index}>i am item ${item}</li>
        })
        }
      </ul>
    )
  }
}
