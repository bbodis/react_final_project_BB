import { useRef, useState } from "react";
import Card from "../wrappers/Card";
import Swal from 'sweetalert2'
import styles from "./ShopForm.module.css";

const ShopForm = ({ sendDataToApp }) => {
    const NameRef = useRef();
    const WeightRef = useRef();
    const DescriptionRef = useRef();
    const IDRef = useRef();

    const handleSubmit = (event) => {
        event.preventDefault();
        summarizeShopData();
    };
    const summarizeShopData = () => {
        const Name = NameRef.current.value;
        const Weight = WeightRef.current.value;
        const Description = DescriptionRef.current.value;
        const ID = IDRef.current.value;
        if (!Name || !Weight || !Description || !ID) {
              Swal.fire({
                icon: "error",
                title: "Hiba",
                text: "Kérem töltse ki a kötelező mezőket!",
        });
        return;
        }
    }
    return(
    <Card>
        <form onSubmit={handleSubmit}>
            <label>Termék neve:</label>
            <input type="text" ref={NameRef}/>
            <label>ID:</label>
            <input type="number" ref={IDRef}/>
            <label>Termék tömege:</label>
            <input type="number" ref={WeightRef}/>
            <label>Termék leírása</label>
            <input type="textbox" ref={DescriptionRef}/>
            <button type="submit">Küldés</button>
        </form>
    </Card>
    )
}
export default ShopForm;
