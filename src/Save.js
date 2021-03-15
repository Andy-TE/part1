import React from 'react'
import ReactDOM from 'react-dom'

const Header = (props) => {
  console.log(props)
  return (
    <h1>{props.course}</h1>
  )
}

const Content = (props) => {
  return (  
    <>
    <p>{props.name} {props.exercises}</p>
    </>
  )
}

const Total = (props) => {
  return (
    <p> Number of exercises {props.totalexercises}</p>
  )
}

const App = () => {
  const course = 'Half Stack Application development'
  const exercises = [{name: 'Fundamentals of React', exercise: 10},
    {name: 'Using props to pass data', exercise: 7},
    {name: 'State of a component', exercise: 14}];
  let totalexercises =  0;

  return(
    <div>
      <Header course = {course} />
      {exercises.map(ex => {
        totalexercises += ex.exercise;
        return <Content name={ex.name} exercises={ex.exercise}/>
         })
      }
      <Total totalexercises = {totalexercises}/>
    </div>
  )
}

ReactDOM.render(<App />, document.getElementById('root'))