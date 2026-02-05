import { useState } from "react"
import Result from "./components/Result"
import Input from "./components/Input"
import { INITIAL_DATA } from "./util/investment"


export default function App() {
  const [ investmentData, setInvestmentData ] = useState(INITIAL_DATA)

  const inputIsValid = Object.values(investmentData).every(value => value > 0)

  function onChangeHandler( newInputObj ) {
    setInvestmentData(prevInvestmentData => ({
      ...prevInvestmentData,
      ...newInputObj
    }))
  }


  return (
    <>
      <Input data={investmentData} handlerDataUpdate={onChangeHandler} />
      {inputIsValid ?
        <Result data={investmentData} /> :
        <p className="center error">Please enter values greater than 0</p>
      }
    </>
  )
}
