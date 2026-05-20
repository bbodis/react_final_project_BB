import { useRef, useState } from "react";
import Card from "../wrappers/Card";
import Swal from "sweetalert2";
import styles from "../wrappers/ShopForm.module.css";

const ShopForm = ({ sendDataToApp }) => {
    const NameRef = useRef();
    const WeightRef = useRef();
    const DescriptionRef = useRef();
    const IDRef = useRef();

    const handleSubmit = (event) => {
        event.preventDefault();
        summarizeShopData();
    };
    const summarizeTravelData = () => {
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
}
export default ShopForm;
