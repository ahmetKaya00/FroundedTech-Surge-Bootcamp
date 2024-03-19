import React, { Component } from 'react'

export default class Navi extends Component {
  render() {
    return (
      <div>
        <h2>Sepetteki Ürün: {this.props.cart.length}</h2>
      </div>
    )
  }
}
