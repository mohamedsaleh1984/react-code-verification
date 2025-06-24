import './App.css'
import CodeVer from './CodeVer/CodeVer'
import { AllowedPattern } from './CodeVer/AllowedPattern'

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
