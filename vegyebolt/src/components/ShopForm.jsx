import { useRef, useState } from "react";
import Card from "../wrappers/Card";
import Swal from 'sweetalert2';

const ShopForm = ({ sendDataToApp }) => {
    const nameRef = useRef();
    const weightRef = useRef();
    const categoryRef = useRef();
    const descriptionRef = useRef();
    const handleSubmit = (event) => {
        event.preventDefault();
        const name = nameRef.current.value;
        const category = categoryRef.current.value;
        const weight = weightRef.current.value;
        const description = descriptionRef.current.value;
        if (!name || !category || !weight || !description) {
            Swal.fire({
                icon: "error",
                title: "Hiba",
                text: "Kérem töltsön ki minden mezőt!",
            });
            return;
        }
        sendDataToApp({name, weight, category, description});
        Swal.fire({
            icon: "success",
            title: "Siker!",
            text: "Termék hozzáadva.",
            timer: 1500,
            showConfirmButton: false
        });
    }
    return (
        <Card>
            <div>
                <h2>Új termék hozzáadása</h2>
                <form onSubmit={handleSubmit}>
                    <div><label htmlFor="name">Termék neve</label>
                        <input type="text" id="name" ref={nameRef}/>
                    </div>
                    <div>
                        <label htmlFor="category">Termék kategóriája</label>
                        <input type="text" id="category" ref={categoryRef}/>
                    </div>
                    <div>
                        <label htmlFor="weight">Termék tömege (g)</label>
                        <input type="number" id="weight" ref={weightRef}/>
                    </div>
                    <div>
                        <label htmlFor="description">Termék leírása</label>
                        <input type="text" id="description" ref={descriptionRef}/>
                    </div>
                    <button type="submit">Küldés</button>
                </form>
            </div>
        </Card >
    );
};
export default ShopForm;