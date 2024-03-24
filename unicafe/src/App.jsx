import { useState } from 'react'
const Display = ({text}) => <div>{text}</div>  // Display component to render prop text

const Button = ({handleClick, text}) =>(
  <button onClick= {handleClick}>
    {text}
  </button>
)

const App = () => {

  const [good, setGood] = useState(0)
  const [neutral, setNeutral] = useState(0)
  const [bad, setBad] = useState(0)

  return (
    <div>
      <h1>Give feedback</h1>
      <Button handleClick={() => setGood(good + 1)} text = "good" />
      <Button handleClick={() => setNeutral(neutral + 1)} text = "neutral"/>
      <Button handleClick={() => setBad(bad + 1)} text = "bad"/>

      <h1>Statistics</h1>

      <Display text={"good: " + good}/>
      <Display text={"neutral: " + neutral}/>
      <Display text={"bad: " + bad}/>

    </div>
  )
}
export default App