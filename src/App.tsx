import { useState } from 'react'
import './App.css'
import CodeVer from './components/CodeVer'
import { AllowedPattern } from './components/AllowedPattern'

function App() {
  const [count, setCount] = useState(0)

  const onValid = () => {
    console.log("valid code entered")
  }
  return (
    <>
      <CodeVer expectedCode={"123456"} onValid={onValid}
        allowedPattern={AllowedPattern.NumbersOnly}
        splitChar={'-'}
      />
      <div className="card">
        <button onClick={() => setCount((count) => count + 1)}>
          count is {count}
        </button>
        <p>
          Edit <code>src/App.tsx</code> and save to test HMR
        </p>
      </div>

    </>
  )
}

export default App
