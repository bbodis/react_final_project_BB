import Card from "../wrappers/Card";
import { NavLink } from "react-router";
import styles from "./ShopItem.module.css";
const ShopItem = ({name, category, img, price, stock,description}) => {
  return (
    <Card>
      <h2>{name}</h2>
      <h3>{category}</h3>
      <p>{description}</p>
      <NavLink to={"/details/${id}"}><button>Részletek</button></NavLink>
    </Card>
  );
};
export default ShopItem;