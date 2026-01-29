export default function Input({ name }) {
  const editedName = name.toLowerCase().replace(/\s+/g, "-")

  return (
    <div>
      <label htmlFor={editedName}>{name}</label>
      <input
        type="number"
        id={editedName}
        name={editedName}
      />
    </div>
  )
}
