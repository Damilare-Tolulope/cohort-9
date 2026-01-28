import Header from "./components/Header";
import "./App.css"
import { Route, Routes } from "react-router-dom";
import Home from "./pages/Home";
import About from "./pages/About";
import Contact from "./pages/Contact";
import User from "./pages/User";

const App = () => {
  // const [name, setName] = useState('Dele');
  // const [count, setCount] = useState(0);
  // const [isValid, setIsValid] = useState(false);

  // let href = "https://axia.africa";
  // let placeholder = "Visit Google to search for anything!!!";

  // const handleClick = (newName) => {
  //   console.log("Old name: ", name);
  //   console.log("New name: ", newName);
  // }

  // const handleGradeStudent = (score) => {
  //   if (score > 90) {
  //     console.log("Excellent");
  //   } else if (score > 80) {
  //     console.log("Good")
  //   } else if (score > 50) {
  //     console.log("Average")
  //   } else {
  //     console.log("Fair")
  //   }
  // }

  return (
    <div>
      <Header />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/user/:userId" element={<User />} />
        </Routes>
    </div>
  )
}

export default App;
