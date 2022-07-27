import { useEffect, useState } from "react";
import "./App.css";

import getFetch from "./utils/getFetch";

function App() {
  const [characters, setCharacters] = useState([]);
  const [loading, setLoading] = useState(false);

  async function getCharacters() {
    try {
      setLoading(true);
      const { results } = await getFetch("people/");
      setCharacters(results);
    } catch (error) {
      throw new Error(error);
    } finally {
      setLoading(false);
    }
  }

  useEffect(() => {
    getCharacters();
  }, []);

  return (
    <div className="App">
      <ul>
        {loading && <p>Carregando...</p>}
        {characters &&
          characters.map((character) => (
            <li key={character.name}>{character.name}</li>
          ))}
      </ul>
    </div>
  );
}

export default App;
