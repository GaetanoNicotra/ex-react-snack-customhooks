import useSwitch from "./hook/useSwitch"
import useDate from "./hook/useDate"
import useCustomPointer from "./hook/useCustomPointer";
import useKeyPress from "./hook/useKeyPress"

function App() {
  // snack 1
  const [isOn, toggle] = useSwitch();

  // snack 2
  const date = useDate();

  // snack 3
  const mousePosition = useCustomPointer("🍧");

  // snack bonus 
  const isPress = useKeyPress("Enter");

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
      {/* snack 3 */}
      <div>
        <h1>Sposta il mouse per vedere il cursore personalizzato!</h1>
        {mousePosition}
      </div>
      {/* snack bonus  */}
      <div>
        <h1>Tieni premuto "Enter" per testare il custom hook</h1>
        <p>{isPress ? "Enter premuto! ✅" : "Aspettando input... ⌨️"}</p>
      </div>
    </>
  );

}

export default App
