import { useEffect, useState } from "react";

function App() {
  const [msg, setMsg] = useState("Loading...");

  useEffect(() => {
    fetch(import.meta.env.VITE_API_URL + "/api")
      .then(res => res.json())
      .then(data => setMsg(data.message))
      .catch(() => setMsg("API unreachable"));
  }, []);

  return (
    <div style={{ padding: "40px" }}>
      <h1>React on Cloud Run</h1>
      <p>Backend says: {msg}</p>
    </div>
  );
}

export default App;