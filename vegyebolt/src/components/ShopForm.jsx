import { useRef, useState } from "react";
import Card from "../wrappers/Card";
import Swal from 'sweetalert2';

const ShopForm = ({ sendDataToApp }) => {
    const nameRef = useRef();
    const categoryRef = useRef();
    const imgRef = useRef();
    const priceRef = useRef();
    const stockRef = useRef();
    const descriptionRef = useRef();
    const handleSubmit = (event) => {
        event.preventDefault();
        const name = nameRef.current.value;
        const category = categoryRef.current.value;
        const img = imgRef.current.value;
        const price = priceRef.current.value;
        const stock = stock.current.value;
        const description = descriptionRef.current.value;
        if (!name || !category || !description || !img || !price || !stock) {
            Swal.fire({
                icon: "error",
                title: "Hiba",
                text: "Kérem töltsön ki minden mezőt!",
            });
            return;
        }
        sendDataToApp({name, category, description, img, stock, price});
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
                        <label htmlFor="img">Kép URL címe</label>
                        <input type="text" id="img" ref={imgRef}/>
                    </div>
                    <div>
                        <label htmlFor="price"> Termék Ára (FT)</label>
                        <input type="number" id="price" ref={priceRef}/>
                    </div>
                    <div>
                        <label htmlFor="stock">Raktáron (db)</label>
                        <input type="number" id="stock" ref={stockRef}/>
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