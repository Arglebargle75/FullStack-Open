import { useState } from 'react'
const Display = ({text}) => <div>{text}</div>  // Display component to render prop text

const StatisticLine = ({text, value}) => (
  <tr>
    <td>{text}</td>
    <td>{value}</td>
  </tr>
)
const Button = ({handleClick, text}) =>(
  <button onClick= {handleClick}>
    {text}
  </button>
)

const Statistics = ({good, neutral, bad, all}) =>{
  if (all > 0) {
    return(
      <table>
        <tbody>
          <StatisticLine text="good" value={good}/>
          <StatisticLine text="neutral" value={neutral}/>
          <StatisticLine text="bad" value={bad}/>
          <StatisticLine text="average" value={(good - bad) / all}/>
          <StatisticLine text="positive" value={good / all * 100 + "%"}/>
        </tbody>
      </table>
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
      <h1>Statistics</h1>
      <Statistics good={good} neutral={neutral} bad={bad} all={all}/>


    </div>
  )
}
export default App
