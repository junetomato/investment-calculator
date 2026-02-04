export default function Input({ data, handlerDataUpdate }) {
  return (
    <section id="user-input">
      <div>
        <label htmlFor="initialInvestment">Initial Investment</label>
        <input
          type="number"
          id="initialInvestment"
          name="initialInvestment"
          onChange={(e => handlerDataUpdate({ initialInvestment: +e.target.value }))}
          value={data.initialInvestment}
        />
      </div>
      <div>
        <label htmlFor="annualInvestment">Annual Investment</label>
        <input
          type="number"
          id="annualInvestment"
          name="annualInvestment"
          onChange={(e => handlerDataUpdate({ annualInvestment: +e.target.value }))}
          value={data.annualInvestment}
        />
      </div>
      <div>
        <label htmlFor="expectedReturn">Expected Return</label>
        <input
          type="number"
          id="expectedReturn"
          name="expectedReturn"
          onChange={(e => handlerDataUpdate({ expectedReturn: +e.target.value }))}
          value={data.expectedReturn}
        />
      </div>
      <div>
        <label htmlFor="duration">Initial Investment</label>
        <input
          type="number"
          id="duration"
          name="duration"
          onChange={(e => handlerDataUpdate({ duration: +e.target.value }))}
          value={data.duration}
        />
        {data.duration < 1 && <p className="error">Please enter a value greater than 0</p>}
      </div>
    </section>
  )
}
