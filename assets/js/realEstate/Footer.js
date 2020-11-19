import React, { Component } from 'react'

export default class Footer extends Component {
  constructor() {
    super()
    this.state = {
      name: 'Joe',
    }
  }
  // clickedBtn = () => {
  //   console.log('swag')
  // }
  render() {
    return (
      <section className="footer">
        <div>Footer Placeholder</div>
      </section>
    )
  }
}
