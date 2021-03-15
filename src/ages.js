import React from 'react'
import ReactDOM from 'react-dom'

const Hello = ( { name , age } ) => {
    const bornYear = () => {
        const yearNow = new Date().getFullYear()
        return yearNow - age
    }
    return (
      <div>
        <p>
          Hello {name}, you are {age} years old
          <p>So you were probably born in {bornYear()}</p>
        </p>
      </div>
    )
}

const App = () => {
    const name = 'Peter'
    const age = 10
  
    return (
      <div>
        <h1>Greetings</h1>
        <Hello name="Maya" age={26 + 10} />
        <Hello name={name} age={age} />
      </div>
    )
}

ReactDOM.render(<App />, document.getElementById('root'))