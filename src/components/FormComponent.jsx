import { useState } from "react";

const FormComponent = () => {
    const [firstName, setFirstName] = useState("");
    const [lastName, setLastName] = useState("");
    const [message, setMessage] = useState("");

    const handleUserInfo = () => {
        if (firstName.length <= 3) {
            alert("Firstname should be longer than 3 characters");
            return
        }

        console.log(`${firstName} ${lastName} says ${message}`);
    }

    return (
        <div style={{
            padding: "20px: 10px"
        }}>
            <h1>Basic Information</h1>
            <form style={{ display: "flex", flexDirection: "column", width: "20%" }}>
                <input value={firstName} onChange={(event) => setFirstName(event.target.value)} placeholder="First name" type="text" />
                {firstName && firstName.length < 4 && <p>First needs at least 4 characters</p>}
                <input value={lastName} onChange={(e) => setLastName(e.target.value)} placeholder="Last name" type="text" />
                <textarea value={message} onChange={(e) => setMessage(e.target.value)} placeholder="Message"></textarea>
                <button onClick={handleUserInfo} type="button">Save Info</button>
            </form>
        </div>
    )
}

export default FormComponent;