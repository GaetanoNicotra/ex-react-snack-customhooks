import useSwitch from "./hook/useSwitch"
import useDate from "./hook/useDate"

function App() {
  // snack 1
  const [isOn, toggle] = useSwitch();

  // snack 2
  const date = useDate();

  return (
    <>
      {/* snack 1 */}
      <div>
        <h1>Il valore è: {isOn ? "ON" : "OFF"}</h1>
        <button onClick={toggle}>Cambia Stato</button>
      </div>
      {/* snack 2 */}
      <div>
        <h1>Data e ora attuali:</h1>
        <p>{date.toLocaleString()}</p>
      </div>
    </>

  );

}

export default App
