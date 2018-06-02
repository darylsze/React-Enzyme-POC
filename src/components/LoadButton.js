// @flow

import React from "react";

type Props = {
  onClickHandler: () => void
}

export default class LoadButton extends React.PureComponent<Props> {
  render(){
    return(
      <button
        onClick={this.props.onClickHandler}
      >load more</button>
    )
  }
}