import React, { useState } from "react";

export default function B2App() {
    const [UserName, setUserName] = useState("");
    function channgeName(e) {
        setUserName(e.target.value)
    }

    return (
        <div>
            <input type="text" name="name" onChange={channgeName} />
            <p>Greeting {UserName}</p>
        </div>
    );
}
