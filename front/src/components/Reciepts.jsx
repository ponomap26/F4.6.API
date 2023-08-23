import React, {useState} from "react";
import {useParams} from "react-router-dom";


function Reciepts(){
    const [receipts, setReceipts] = useState([]);
    const [id] = useParams()
    return(
        <div>
            123
        </div>
    )
}
export default Reciepts