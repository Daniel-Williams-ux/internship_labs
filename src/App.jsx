import React from 'react'

import './App.css'
import SignUp from './components/sign-up/sign-up.jsx'

class App extends React.Component {
  render() {
    return (
      <div className="App">
        <h1>CHATSCRUM</h1>
        <SignUp />
      </div>  
    )
  }
}

export default App;