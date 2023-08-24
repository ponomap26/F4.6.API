import React, { useEffect, useState } from "react";
import { useParams, useNavigate } from "react-router-dom";
import Table from "react-bootstrap/Table";
import Button from "react-bootstrap/Button";
import "../styles/Reciepts.css";


function Receipts() {
    const {id} = useParams();
    const navigate = useNavigate();
    const [reciept, setReceipt] = useState(null);
    const goBack = () => navigate(-1);

    useEffect(() => {
        fetch(`http://127.0.0.1:8000/api/${id}`)
            .then(response => response.json())
            .then(data => setReceipt(data))
            // console.log(data)
            //     setReceipt(data);
            //
            .catch((error) => {
                console.error("Ошибка при получении данных:", error);
            });
    }, [id]);

    return (
        <div>
            <Button variant="dark" onClick={goBack}>
                Назад
            </Button>
            {reciept && (
                <div>
                    <h1>Рецепт {reciept.title}</h1>
                    <Table variant='' striped bordered hover className='table-item'>
                        <thead>
                        <tr>
                            <th>Описание</th>
                            <th>Ингредиенты</th>
                            <th>ФОТО</th>
                        </tr>
                        </thead>
                        <tbody>
                        <tr>
                            <td>{reciept.body}</td>
                            <td>{reciept.ingredient}</td>
                            <td>
                                <img src={reciept.image} alt="фото" />
                            </td>
                        </tr>
                        </tbody>
                    </Table>
                </div>
            )}
        </div>
    );
}

export default Receipts;