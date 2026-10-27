import { useState } from "react";
import "./style.css";

export default function App() {
  const [count, setCount] = useState(0);

  return (
    <div>
      <h1>Hello, hackathon!</h1>
      <p>This page is made by React.</p>
      <button onClick={() => setCount(count + 1)}>
        Clicked {count} times
      </button>
    </div>
  );
}
