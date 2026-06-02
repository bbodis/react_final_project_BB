import { useRef } from "react";
import styles from "./ShopForm.module.css";
import Card from "../wrappers/Card";
import Swal from 'sweetalert2';

const ShopForm = ({ sendDataToApp }) => {
    const nameRef = useRef();
    const categoryRef = useRef();
    const img_urlRef = useRef();
    const priceRef = useRef();
    const stockRef = useRef();
    const descriptionRef = useRef();
    const handleSubmit = async (event) => {
        event.preventDefault();
        const name = nameRef.current.value;
        const category = categoryRef.current.value;
        const img_url = img_urlRef.current.value;
        const price = priceRef.current.value;
        const stock = stockRef.current.value;
        const description = descriptionRef.current.value;
        if (!name || !category || !description || !img_url || !price || !stock) {
            Swal.fire({
                icon: "error",
                title: "Hiba",
                text: "Kérem töltsön ki minden mezőt!",
            });
            return;
        }
        const success = await saveShopDataToDatabase(name, category, description, img_url, stock, price);
        if (success) {
            nameRef.current.value = "";
            categoryRef.current.value = "";
            img_urlRef.current.value = "";
            priceRef.current.value = "";
            stockRef.current.value = "";
            descriptionRef.current.value = "";

            Swal.fire({
                icon: "success",
                title: "Siker!",
                text: "Termék hozzáadva.",
                timer: 1500,
                showConfirmButton: false
            });
        }
    }
    const saveShopDataToDatabase = async (name, category, description, img_url, stock, price) => {
          try {
            const response = await fetch("http://localhost:3000/products", { 
    
              method: "POST",
              headers: {
                "Content-Type": "application/json",
                "authorization": localStorage.getItem("token"),
              },
              body: JSON.stringify({name: name, category: category, description: description, img_url: img_url, stock: stock, price: price}),
            });
            if (response.ok) {
              const data = await response.json();
              sendDataToApp(data);
              return true;
            } else {
              Swal.fire({
                icon: "error",
                title: "Hiba",
                text: "A termék mentése nem sikerült!",
              });
              return false;
            }
          } catch (error) {
            console.error("Hiba:", error);
            return false;
          }
        };
    return (
        <Card>
            <div>
                <h2>Új termék hozzáadása</h2>
                <form onSubmit={handleSubmit}>
                    <div>
                        <label>Termék neve</label><br />
                        <input type="text" ref={nameRef}/>
                    </div>
                    <div>
                        <label>Termék kategóriája</label><br />
                        <input type="text" ref={categoryRef}/>
                    </div>
                    <div>
                        <label>Kép URL címe</label><br />
                        <input type="text" ref={img_urlRef}/>
                    </div>
                    <div>
                        <label> Termék Ára (FT)</label><br />
                        <input type="number" ref={priceRef}/>
                    </div>
                    <div>
                        <label>Raktáron (db)</label><br />
                        <input type="number" ref={stockRef}/>
                    </div>
                    <div>
                        <label>Termék leírása</label><br />
                        <input type="text" ref={descriptionRef}/>
                    </div>
                    <br />
                    <button type="submit" className={styles.sendBtn}>Küldés</button>
                </form>
            </div>
        </Card >
    );
};
export default ShopForm;