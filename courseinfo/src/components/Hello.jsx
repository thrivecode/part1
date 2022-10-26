import React from "react"

const Hello = ({ age, name }) => {
  const yearBorn = () => new Date().getFullYear() - age

  return (
    <div>
      <h3>
        Hello {name}, you are {age} years old.
      </h3>
      <h3>So you were probably born in {yearBorn()}!</h3>
    </div>
  )
}
export default Hello
