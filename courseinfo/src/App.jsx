"use strict"

import "./App.css"
import { Counter } from "./components/Counter"
import Hello from "./components/Hello"

const Header = (props) => {
  return (
    <>
      <h2>{props.course}</h2>
    </>
  )
}

const Part = (props) => {
  return (
    <>
      <p>
        {props.name} {props.exercise}
      </p>
    </>
  )
}

const Content = ({ parts }) => {
  return (
    <div>
      {parts.map((item) => (
        <Part key={item.id} name={item.name} exercise={item.exercise} />
      ))}
    </div>
  )
}

// const total = ({ parts }) => {
//   parts.map((value) => (value.exercise += value.exercise))
// }

const Total = ({ parts }) => {
  let sum = 0
  return (
    <>
      <p>
        Number of exercises is
        {parts[0].exercise + parts[1].exercise + parts[2].exercise}
      </p>
    </>
  )
}

export default function App() {
  const course = "Half Stack application development"
  const parts = [
    {
      id: 1,
      name: "Fundamentals of React",
      exercise: 10,
    },
    {
      id: 2,
      name: "Using props to pass data",
      exercise: 7,
    },
    {
      id: 3,
      name: "State of a component",
      exercise: 14,
    },
  ]

  return (
    <div className="App">
      <Header course={course} />
      <Content parts={parts} />
      <Total parts={parts} />
      <Hello name="Abdul" age={38} />
      <Counter />
    </div>
  )
}
