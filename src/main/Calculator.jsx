import React ,{ Component } from 'react'
import Buttons from '../components/Buttons'
import Display from '../components/Display'
import './Calculator.css'

export default class Calculator extends Component {

  clearMemory = () => {
    console.log('Limpo')
  }

  setOp = (operation) => {
    console.log(operation)
  }

  addDigit = (digit) => {
    console.log(digit)
  }

  render() {
    return (
      <div className='calculator'>
        <Display value="0" />
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