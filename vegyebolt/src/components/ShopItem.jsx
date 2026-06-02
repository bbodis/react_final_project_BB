import Card from "../wrappers/Card";
import { NavLink } from "react-router";
import { useAuth } from "../context/loginContext";
import styles from "./ShopItem.module.css";
import Swal from "sweetalert2";

const ShopItem = ({ name, category, img_url, price, stock, description, id, deleteShop }) => {
  const { isLogged } = useAuth();
  const handleDelete = async (id) => {
    const confirmDelete = window.confirm("Biztosan törölni szeretnéd ezt a hírdetést?");
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
      <div className={styles.cardContent}>
        <img src={img_url} alt={name} className={styles.productImage}/>
        <div className={styles.infoSection}>
          <span className={styles.categoryTag}>{category}</span>
          <h2 className={styles.title}>{name}</h2>
          <p className={styles.description}>{description}</p>
          <div className={styles.metaInfo}>
            <span className={styles.price}>{Number(price)} Ft</span>
            <span className={styles.stock}>Készleten: {stock} db</span>
          </div>
        </div>
        <div className={styles.actions}>
          <NavLink to={`/details/${id}`} className={styles.detailsLink}>
            <button className={styles.detailsBtn}>Részletek</button>
          </NavLink>
          {isLogged && (<button onClick={() => handleDelete(id)} className={styles.deleteBtn}>Törlés</button>)}
        </div>
      </div>
    </Card>
  );
};
export default ShopItem;