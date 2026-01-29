import Input from "./Input";

export default function UserInputs({}) {
  return (
    <section id="user-input" className="">
      <div className="input-group">
        <Input name="Initial Investment" />
        <Input name="Annual Investment" />
      </div>
      <div className="input-group">
        <Input name="Expected Return" />
        <Input name="Duration" />
      </div>
    </section>
  )
}
