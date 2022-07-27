import { useEffect, useState } from "react";
import "./App.css";

import getFetch from "./utils/getFetch";

function App() {
  const [responseData, setResponseData] = useState([]);
  const [loading, setLoading] = useState(false);

  async function getResponse() {
    try {
      setLoading(true);
      const { results } = await getFetch("people/");
      setResponseData(results);
    } catch (error) {
      throw new Error(error);
    } finally {
      setLoading(false);
    }
  }

  useEffect(() => {
    getResponse();
  }, []);

  return (
    <div className="App">
      <ul>
        {loading && <p>Carregando...</p>}
        {responseData &&
          responseData.map((character) => (
            <li key={character.name}>{character.name}</li>
          ))}
      </ul>
    </div>
  );
}

export default App;
