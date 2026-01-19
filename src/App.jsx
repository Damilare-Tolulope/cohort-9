import Button from "./components/Button"
import Header from "./components/Header";
import { Link } from "./components/Link"
import "./App.css"
import { useState } from "react";

const App = () => {
  const [name, setName] = useState('Dele');
  const [count, setCount] = useState(0);
  const [isValid, setIsValid] = useState(false);
  let href = "https://axia.africa";
  let placeholder = "Visit Google to search for anything!!!";

  return (
    <div>
      <Header />
      <p>Hello there!</p>
      <p>I am a student of Axia</p>
      <p style={{ margin: "10px 0px" }}>My name is <span style={{ fontWeight: "bold" }}>{name}</span>. I took {count} lectures on Javascript and my certificate is {isValid ? "Valid" : "Invalid"}</p>

      <button onClick={() => setName("Bayo")}>Update name</button>
      <button onClick={() => setCount(count + 1)}>+</button>
      <button onClick={() => setCount(count - 1)}>-</button>
      <button onClick={() => setIsValid(!isValid)}>Toggle validity</button>

      <Button />
      <Link linkHref={href} linkPlaceholder={placeholder} />
    </div>
  )
}

export default App;
