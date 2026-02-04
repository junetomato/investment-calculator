import { useState } from "react"
import Result from "./components/Result"
import Input from "./components/Input"
import { INITIAL_DATA } from "./util/investment"


export default function App() {
  const [ investmentData, setInvestmentData ] = useState(INITIAL_DATA)

  function onChangeHandler( newInputObj ) {
    setInvestmentData(prevInvestmentData => ({
      ...prevInvestmentData,
      ...newInputObj
    }))
  }


  return (
    <>
      <Input data={investmentData} handlerDataUpdate={onChangeHandler} />
      <Result data={investmentData} />
    </>
  )
}
