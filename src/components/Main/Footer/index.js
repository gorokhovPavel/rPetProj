import React, { Component } from 'react'
import './style.css'

export default class Footer extends Component {
  constructor(props) {
    super(props)
    const { footerObj } = props
    this.state = footerObj
  }

  setName(inName) {
    this.setState({ name: inName })
  }

  render() {
    return (
      <>
        <div className="footerDiv">
          <span className="left">{this.state.date}</span>
          <button className="center" onClick={() => this.setName('vasya')}>
            change
          </button>
          <span className="right">{this.state.name}</span>
        </div>
      </>
    )
  }
  // "emmet.includeLanguages": {"javascript": "javascriptreact"},
}
