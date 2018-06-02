// @flow

import React from "react";

type Props = {
  bgColor?: string
}
export default class Header extends React.PureComponent<Props> {
  render(){
    const { bgColor } = this.props;

    return (
      <div className='nav' style={{ backgroundColor: bgColor }}>
        <div className='item'>index</div>
        <div className='item'>page1</div>
      </div>
    )
  }
}
