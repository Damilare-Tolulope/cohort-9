import { useEffect, useState } from "react";
import { useParams, useNavigate } from "react-router-dom";

const User = () => {
    const [person, setPerson] = useState({});
    const [isLoading, setIsLoading] = useState(false);
    const { userId } = useParams();
    const navigate = useNavigate();

    useEffect(() => {
        setIsLoading(true);
        fetch(`https://jsonplaceholder.typicode.com/users/${userId}`)
            .then((res) => res.json())
            .then(data => {
                setPerson(data);
                setIsLoading(false);
            })
            .catch(error => console.error(error));
    }, [])

    return (
        <div>
            <button onClick={() => navigate(-1)}>Go back</button>
            {isLoading ? <p>Loading user data...</p> : <p>This is user {person.name}'s page.</p>}
        </div>
    )
}

export default User;