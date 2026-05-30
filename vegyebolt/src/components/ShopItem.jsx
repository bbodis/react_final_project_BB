import Card from "../wrappers/Card";
import styles from "./ShopItem.module.css";
const ShopItem = ({name, weight, category, description}) => {
  return (
    <Card>
      <h2>{name}</h2>
      <h3>{category}</h3>
      <h4>{weight}</h4>
      <p>{description}</p>
    </Card>
  );
};
export default ShopItem;