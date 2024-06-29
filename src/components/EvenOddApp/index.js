import {Component} from 'react'

import './index.css'

class EvenOddApp extends Component {
  state = {count: 0, type: ''}

  increment = () => {
    const variable = Math.floor(Math.random() * 101)
    this.setState(prevState => ({count: prevState.count + variable}))
  }
  // Math.floor(Math.random() * 100) + 1;

  render() {
    const {count} = this.state
    let {type} = this.state
    const isEven = count % 2 === 0
    type = isEven ? 'Count is Even' : 'Count is Odd'
    return (
      <div className="container">
        <h1 className="heading">Count {count}</h1>
        <p className="count-type">{type}</p>
        <button className="button" type="button" onClick={this.increment}>
          Increment
        </button>
        <p className="instruction">
          *Increase By Random Number Between 0 to 100
        </p>
      </div>
    )
  }
}
export default EvenOddApp
