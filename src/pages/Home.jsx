import { useNavigate } from "react-router-dom"

const Home = () => {
    const navigate = useNavigate();
    const handleClick = () => {
        alert("I'm going to take you to the contact page. Hang tight!")
        navigate("/contact");
    }

    return (
        <div>
            <h1>Home Page</h1>
            <button onClick={handleClick}>Contact me</button>
        </div>
    )
}

export default Home