import { useState } from 'react'
const Display = ({text}) => <div>{text}</div>  // Display component to render prop text

const Button = ({handleClick, text}) =>(
  <button onClick= {handleClick}>
    {text}
  </button>
)

const Statistics = ({good, neutral, bad, all}) =>{
  if (all > 0) {
    return(
      <div>
        <h1>Statistics</h1>
        <Display text={"good: " + good}/>
        <Display text={"neutral: " + neutral}/>
        <Display text={"bad: " + bad}/>
        <Display text={"all: " + all}/>

        <Display text={"average: " + (good-bad)/all}/>
        <Display text={"positive: " + good / all * 100 + "%"}/>
      </div>
    )
  }
  else {
    return (
      <div>
      <h1>Statistics</h1>
      <div>No feedback given</div>
      </div>
    )
  }
}
const App = () => {

  const [good, setGood] = useState(0)
  const [neutral, setNeutral] = useState(0)
  const [bad, setBad] = useState(0)
  const [all, setAll] = useState(0)

  const incrementValue = (setFunction, stateValue) => {   //Increment the passed state hook by 1, and increment the all count by 1
    setFunction(stateValue + 1)
    setAll(all + 1)

  }

  return (
    <div>
      <h1>Give feedback</h1>

      <Button handleClick={() => incrementValue(setGood, good)} text = "good" />
      <Button handleClick={() => incrementValue(setNeutral, neutral)} text = "neutral"/>
      <Button handleClick={() => incrementValue(setBad, bad)} text = "bad"/>
      <Statistics good={good} neutral={neutral} bad={bad} all={all}/>


    </div>
  )
}
export default App
