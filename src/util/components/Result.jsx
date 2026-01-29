export default function Result({}) {
  return (
    <table id="result">
      <thead>
        <tr>
          <th>Year</th>
          <th>Investment Value</th>
          <th>Interest (Year)</th>
          <th>Total Interest</th>
          <th>Invested Capital</th>
        </tr>
      </thead>
      <tbody>
        <tr>
          <td>1</td>
          <td>$10,000.00</td>
          <td>$500.00</td>
          <td>$500.00</td>
          <td>$10,000.00</td>
        </tr>
        <tr>
          <td>2</td>
          <td>$20,500.00</td>
          <td>$1,025.00</td>
          <td>$1,525.00</td>
          <td>$20,000.00</td>
        </tr>
        <tr>
          <td>3</td>
          <td>$31,525.00</td>
          <td>$1,576.25</td>
          <td>$3,101.25</td>
          <td>$30,000.00</td>
        </tr>
      </tbody>
    </table>
  )
}
