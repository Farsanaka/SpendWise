import "./App.css";
import { useState } from "react";

function App() {
  const [total, setTotal] = useState(0);
  return (
    <>
      <p>Total : {total}</p>
      <button onClick={() => setTotal(total + 100)}>Add 100</button>
    </>
  );
}

export default App;
