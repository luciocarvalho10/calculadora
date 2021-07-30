import React ,{ Component } from 'react'
import Buttons from '../components/Buttons'
import Display from '../components/Display'
import './Calculator.css'

const initState = {
  display: '0',
  clear: false,
  operation: null,
  values: [ 0, 0 ],
  now: 0
}

export default class Calculator extends Component {

  state = {...initState}

  clearMemory = () => {
    this.setState({ ...initState })
  }

  setOp = (operation) => {
    if (this.state.now === 0) {
      this.setState({
        clear: true,
        operation,
        now: 1
      })
    } else {
      const operationNow = this.state.operation
      const values = [ ...this.state.values ]
      const ends = operation === '='
      switch (operationNow) {
        case '+':
          values[0] = values[0] + values[1]
          values[1] = 0
          break;
        case '-':
          values[0] = values[0] - values[1]
          values[1] = 0
          break;
        case '*':
          values[0] = values[0] * values[1]
          values[1] = 0
          break;
        case '/':
          values[0] = values[0] / values[1]
          values[1] = 0
          break;
        default: console.log('Erro fora das 4 operções no switch!!')
          break;
      }

      this.setState({
        display: values[0],
        operation: ends ? null : operation,
        now: ends ? 0: 1,
        clear: !ends,
        values
      })
    }
  }

  addDigit = (digit) => {
    if (digit === '.' && this.state.display.includes('.')) {
      return
    }

    const clear = this.state.display === '0' || this.state.clear
    const newValue = clear ? '' : this.state.display
    const display = newValue + digit
    this.setState({display, clear: false})

    if (digit !== '.') {
      const values = [ ...this.state.values ]
      values[ this.state.now ] = parseFloat(display)
      this.setState({ values })
      console.log(values)
    }
  }

  render() {
    return (
      <div className='calculator'>
        <Display value={ this.state.display } />
        <Buttons el="AC" triple click={this.clearMemory} />
        <Buttons el="/" operation click={this.setOp} />
        <Buttons el="7" click={this.addDigit} />
        <Buttons el="8" click={this.addDigit} />
        <Buttons el="9" click={this.addDigit} />
        <Buttons el="*" operation click={this.setOp} />
        <Buttons el="4" click={this.addDigit} />
        <Buttons el="5" click={this.addDigit} />
        <Buttons el="6" click={this.addDigit} />
        <Buttons el="-" operation click={this.setOp} />
        <Buttons el="1" click={this.addDigit} />
        <Buttons el="2" click={this.addDigit} />
        <Buttons el="3" click={this.addDigit} />
        <Buttons el="+" operation click={this.setOp} />
        <Buttons el="0" double click={this.addDigit} />
        <Buttons el="." click={this.addDigit} />
        <Buttons el="=" operation click={this.setOp} />
      </div>
    )
  }
}