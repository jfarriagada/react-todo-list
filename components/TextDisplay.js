import React, { Component } from 'react'

export default class TextDisplay extends Component {

  render() {
    return <div>I'm displaying text from my parent : { this.props.text } </div>
  }

}
