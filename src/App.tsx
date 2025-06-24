import './App.css'
import CodeVer from './components/CodeVer'
import { AllowedPattern } from './components/AllowedPattern'

function App() {

  const onValid = () => {
    alert("You've entered correct code.")
  }

  const onFail = () => {
    alert("Entered Code is not correct")
  }

  return (
    <>
      <CodeVer expectedCode={"123456"} onValid={onValid} onFail={onFail}
        allowedPattern={AllowedPattern.NumbersOnly} splitChar='+'
      />
    </>
  )
}

export default App
