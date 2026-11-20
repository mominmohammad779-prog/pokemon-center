import {useState, useEffect} from 'react';

export default function App() {
  const [joke, setJoke] = useState(null);
  const[isloading, setIsLoading] = useState(false);
  const[error, setError] = useState("");

async function getJoke() {
  setIsLoading(true);
  setError("");
 
  const response = await fetch("https://v2.jokeapi.dev/joke/Any?safe-mode&type=twopart");
  const data = await response.json();

  setJoke(data);
  setIsLoading(false);
}
  useEffect(() => {
    getJoke();
  }, []);

  return (
    <div>
      <h2>Joke Generator</h2>
      <h3>let me tell you a joke!</h3>
      {isloading &&<p>joke is loading...</p>}
      {error && <p>there is some error</p>}
      {joke && !isloading &&  (
        <div>
          <h1>{joke.setup}</h1>
          <h3>{joke.delivery}</h3>  
        </div>
      )}
      <button onClick={getJoke}>Get a new joke</button>
    </div>
  );
}