import {Component} from 'react'

import './index.css'

class Welcome extends Component {
  state = {
    isSubscribe: false,
  }

  onSubscribe = () => {
    this.setState(prevState => ({
      isSubscribe: !prevState.isSubscribe,
    }))
  }

  render() {
    const {isSubscribe} = this.state

    const buttonText = isSubscribe ? 'Subscribed' : 'Subscribe'

    return (
      <div className="app-container">
        <h1 className="heading">Welcome</h1>
        <p className="description">Thank you! Happy Learning</p>
        <div>
          <button
            type="button"
            className="subscribe-button"
            onClick={this.onSubscribe}
          >
            {buttonText}
          </button>
        </div>
      </div>
    )
  }
}

export default Welcome
