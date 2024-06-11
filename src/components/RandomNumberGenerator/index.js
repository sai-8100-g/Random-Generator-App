import {Component} from 'react'

import './index.css'

class RandomNumberGenerator extends Component {
  state = {
    randomNum: 0,
  }

  OnNumGenerator = () => {
    const num = Math.ceil(Math.random() * 100)
    this.setState({randomNum: num})
  }

  render() {
    const {randomNum} = this.state

    return (
      <div className="main-container">
        <div className="random-num-container">
          <h1>Random Number</h1>
          <p>
            Generate a Random Number in the <br /> range of 0 to 100
          </p>
          <div>
            <button type="button" onClick={this.OnNumGenerator}>
              Generate
            </button>
          </div>
          <p className="random-num">{randomNum}</p>
        </div>
      </div>
    )
  }
}

export default RandomNumberGenerator
