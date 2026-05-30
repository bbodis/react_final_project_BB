import Card from "../wrappers/Card";
import { NavLink } from "react-router";
import { useAuth } from "../context/loginContext";
import styles from "./ShopItem.module.css";
import Swal from "sweetalert2";
const ShopItem = ({name, category, img, price, stock, description, id, deleteShop}) => {
  const {isLogged} = useAuth()
  const handleDelete = async (id) => {
      const confirmDelete = window.confirm("Biztosan törölni szeretnéd ezt ahírdetést?");
      if (confirmDelete) {
        const response = await fetch(`http://localhost:3000/products/${id}`, {
          method: "DELETE",
          headers: {
            "Content-Type": "application/json",
            "authorization": localStorage.getItem("token"),
          },
        });
        if (response.ok) {
          Swal.fire({
            icon: "success",
            title: "Sikeres törlés",
            text: "A hírdetés sikeresen törölve lett!",
          });
          deleteShop(id);
        } else {
          Swal.fire({
            icon: "error",
            title: "Hiba",
            text: "A hírdetés törlése nem sikerült!",
          });
        }
      }
    };
  return (
    <Card>
      <h2>{name}</h2>
      <h3>{category}</h3>
      <p>{description}</p>
      {isLogged && <button onClick={() => handleDelete(id)}>Törlés</button>}
      <NavLink to={`/details/${id}`}><button>Részletek</button></NavLink>
    </Card>
  );
};
export default ShopItem;