export default function UserInput({}) {
  return (
    <section id="user-input" className="">
      <div className="input-group">
        <div>
          <label htmlFor="initial-investment">Initial Investment</label>
          <input
            type="number"
            id="initial-investment"
            name="initial-investment"
          />
        </div>
        <div>
          <label htmlFor="annual-investment">Annual Investment</label>
          <input
            type="number"
            id="annual-investment"
            name="annual-investment"
          />
        </div>
      </div>
      <div className="input-group">
        <div>
          <label htmlFor="expected-return">Expected Return</label>
          <input
            type="number"
            id="expected-return"
            name="expected-return"
          />
        </div>
        <div>
          <label htmlFor="duration">Duration</label>
          <input
            type="number"
            id="duration"
            name="duration"
          />
        </div>
      </div>
    </section>
  )
}
