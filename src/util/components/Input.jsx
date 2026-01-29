import { useState } from "react"

export default function Input({ name, investmentID, onChangeHandler }) {
  const [ value, setValue ] = useState(0)

  const editedName = name.toLowerCase().replace(/\s+/g, "-")

  function handleChange(e) {
    setValue(e.target.value)
    onChangeHandler({[investmentID]: +e.target.value})
  }

  return (
    <div>
      <label htmlFor={editedName}>{name}</label>
      <input
        type="number"
        id={editedName}
        name={editedName}
        onChange={handleChange}
        value={value}
      />
      {(value < 1 && investmentID === 'duration') && <p className="error">Please enter a value greater than 0</p>}
    </div>
  )
}
