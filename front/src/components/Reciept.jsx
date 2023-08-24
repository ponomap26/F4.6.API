
import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import "../styles/Reciept.css"

function Reciept() {
    const [reciepts, setReceipts] = useState([]);


    useEffect(() => {
        fetch("http://127.0.0.1:8000/api/")
            .then((res) => res.json())
            .then((data) => setReceipts(data))
            .catch((error) => console.error(error));
    }, []);

    if (!reciepts) {
        return <p>Loading...</p>;
    }

    return (
        <div>
            {reciepts.map(reciept => (
                <Link key={reciept.id} to={`/reciept/${reciept.id}`}>
                    <li className={"li-items"}>{reciept.title}</li>
                </Link>
            ))}
        </div>
    );
}

export default Reciept;