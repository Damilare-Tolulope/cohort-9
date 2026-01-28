import { useEffect, useState } from "react";
import { Link } from "react-router-dom";

const FetchApi = () => {
    const [users, setUsers] = useState([]);
    const [isLoading, setIsLoading] = useState(false);

    useEffect(() => {
        setIsLoading(true)
        fetch('https://jsonplaceholder.typicode.com/users')
            .then(response => response.json())
            .then(data => {
                setUsers(data);
                setIsLoading(false)
            })
            .catch(err => console.error(err))
    }, []);

    return (
        <div>
            <p>List of Users working in this organization!!</p>
            {
                isLoading ?
                    <p>Loading....</p> :
                    (
                        <ol>
                            {
                                users.length > 0 ? users.map((user, index) => <li key={index}><Link to={"/user/"+user.id}>{user.name} - {user.email}</Link></li>) : <li>No users found</li>
                            }
                        </ol>
                    )
            }
        </div>
    )
}

export default FetchApi;