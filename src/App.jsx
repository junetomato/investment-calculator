import { useState } from "react"

import Result from "./components/Result"
import Input from "./components/Input"
import { calculateInvestmentResults, INITIAL_DATA } from "./util/investment"


export default function App() {
  const [ investmentData, setInvestmentData ] = useState(INITIAL_DATA)

  function handlerInvestmentData( newInputObj ) {
    setInvestmentData(prevInvestmentData => ({
      ...prevInvestmentData,
      ...newInputObj
    }))
  }

  const investmentResults = calculateInvestmentResults(investmentData);


  return (
    <>
      <section id="user-input">
        <Input
          name="Initial Investment"
          investmentID="initialInvestment"
          onChangeHandler={handlerInvestmentData}
        />
        <Input
          name="Annual Investment"
          investmentID="annualInvestment"
          onChangeHandler={handlerInvestmentData}
        />
        <Input
          name="Expected Return"
          investmentID="expectedReturn"
          onChangeHandler={handlerInvestmentData}
        />
        <Input
          name="Duration"
          investmentID="duration"
          onChangeHandler={handlerInvestmentData}
        />
      </section>
      <Result data={investmentResults} />
    </>
  )
}
