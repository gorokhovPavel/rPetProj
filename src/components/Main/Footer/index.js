import React, { Component } from 'react'
import './style.css'

export default class Footer extends Component {
  constructor(props) {
    super(props)
    const { footerObj } = props
    this.state = footerObj
  }
  render() {
    return (
      <>
        <div></div>
        <div className="footerDiv">
          <span className="left">{this.state.date}</span>
          <span className="right">{this.state.name}</span>
        </div>
      </>
    )
  }
  // "emmet.includeLanguages": {"javascript": "javascriptreact"},
}
