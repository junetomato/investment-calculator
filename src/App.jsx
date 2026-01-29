import { useState } from "react"

import Result from "./util/components/Result"
import Input from "./util/components/Input"
import { calculateInvestmentResults } from "./util/investment"

const INITIAL_DATA = {
  initialInvestment: 0,
  annualInvestment: 0,
  expectedReturn: 0,
  duration: 0,
}

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
