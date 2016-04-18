import React, { Component } from 'react'
import TextDisplay from './TextDisplay'

export default class TextInput extends Component {

  constructor(props, context) {
    super(props, context)
    this.state = {
      inputText: 'initial text :)'
    }
  }

  // Cambiar el valor inicial del input (change state)
  handleChange(event) {
    this.setState({
      inputText: event.target.value
    })
  }

  render() {
    return (
      <div>
        <input
          type='text'
          placeholder='This is going to be text'
          value={this.state.inputText}
          onChange={this.handleChange.bind(this)}/>
        <TextDisplay text={this.state.inputText} />
      </div>
    )
  }

}
