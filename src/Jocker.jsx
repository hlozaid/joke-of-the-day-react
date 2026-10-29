import { useState, useEffect } from "react";

export default function Joker() {
  const [joke, setJoke] = useState({});
  const url = import.meta.env.VITE_JOKE_API_URL;

  const getNewJoke = async () => {
    let res = await fetch(url);
    let jsonRes = await res.json();
    setJoke({ setup: jsonRes.setup, punchline: jsonRes.punchline });
  };

  useEffect(() => {
    async function getFirstJoke() {
      let res = await fetch(url);
      let jsonRes = await res.json();
      console.log(jsonRes);
      setJoke({ setup: jsonRes.setup, punchline: jsonRes.punchline });
    }
    getFirstJoke();
  }, []);

  return (
    <div>
      <h4>Joke of the day</h4>
      <h2>{joke.setup}</h2>
      <h3>{joke.punchline}</h3>
      <button onClick={getNewJoke}>New Joke</button>
    </div>
  );
}
