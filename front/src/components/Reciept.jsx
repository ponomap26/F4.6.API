
import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import "../styles/Reciept.css"

function Receipt() {
    const [receipts, setReceipts] = useState([]);


    useEffect(() => {
        fetch("http://127.0.0.1:8000/api/")
            .then((res) => res.json())
            .then((data) => setReceipts(data))
            .catch((error) => console.error(error));
    }, []);

    if (!receipts) {
        return <p>Loading...</p>;
    }

    return (
        <div>
            {receipts.map((receipt) => (
                <Link key={receipt.id} to={`/receipt/${receipt.id}`}>
                    <li className={"li-items"}>{receipt.title}</li>
                </Link>
            ))}
        </div>
    );
}

export default Receipt;