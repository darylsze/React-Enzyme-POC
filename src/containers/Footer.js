// @flow
import React from "react";

type Props = {
  items: Array<string>
}


export default class Footer extends React.PureComponent<Props> {
  render() {
    const { items } = this.props

    return (
      <ul>
        {
          items.map((item, index) => {
            return <li key={index}>i am item {item}</li>
          })
        }
      </ul>
    )
  }
}


Footer.defaultProps = {
  items: []
}