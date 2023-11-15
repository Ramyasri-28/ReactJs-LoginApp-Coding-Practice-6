// Write your code here
import {Component} from 'react'
import Login from '../Login'
import Logout from '../Logout'
import Message from '../Message'

import './index.css'

class Home extends Component {
  state = {isLoggedIn: false}

  onClickButton = () => {
    this.setState(previousState => ({isLoggedIn: !previousState.isLoggedIn}))
  }

  render() {
    const {isLoggedIn} = this.state

    return (
      <div className="bg-container">
        <div className="home-container">
          <Message isLoggedIn={isLoggedIn} />
          {isLoggedIn ? (
            <Logout logout={this.onClickButton} />
          ) : (
            <Login login={this.onClickButton} />
          )}
        </div>
      </div>
    )
  }
}

export default Home
