import Button from "./components/Button"
import Header from "./components/Header";
import { Link } from "./components/Link"
import "./App.css"
import { useState } from "react";
import FormComponent from "./components/FormComponent";

const App = () => {
  const [name, setName] = useState('Dele');
  const [count, setCount] = useState(0);
  const [isValid, setIsValid] = useState(false);

  let href = "https://axia.africa";
  let placeholder = "Visit Google to search for anything!!!";

  const handleClick = (newName) => {
    console.log("Old name: ", name);
    console.log("New name: ", newName);
  }

  const handleGradeStudent = (score) => {
    if(score > 90){
      console.log("Excellent");
    } else if(score > 80){
      console.log("Good")
    } else if(score > 50) {
      console.log("Average")
    } else {
      console.log("Fair")
    }
  }
  
  return (
    <div>
      <Header />
      <p>Hello there!</p>
      <p>I am a student of Axia</p>
      <p style={{ margin: "10px 0px" }}>My name is <span style={{ fontWeight: "bold" }}>{name}</span>. I took {count} lectures on Javascript and my <span style={{ fontWeight: isValid ? "bold" : "normal" }}>certificate</span> is {isValid ? "Valid" : "Invalid"}</p>

      <button onClick={() => handleGradeStudent(75)}>Grade</button>

      <button onClick={() => setName("Bayo")}>Update name</button>
      <button onClick={() => setCount(count + 1)}>+</button>
      <button onClick={() => setCount(count - 1)}>-</button>
      <button onClick={() => setIsValid(!isValid)}>Toggle validity</button>

      <button onClick={() => handleClick("Lola")}>Show value in console</button>

      <Button />
      <Link linkHref={href} linkPlaceholder={placeholder} />


      <FormComponent />
    </div>
  )
}

export default App;
