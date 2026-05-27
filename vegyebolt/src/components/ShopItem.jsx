import Swal from "sweetalert2";
import Card from "../wrappers/Card";
import styles from "./ShopItem.module.css";
import { NavLink } from "react-router-dom";
import { useAuth } from "../context/loginContext";
const ShopItem = ({ Shop, deleteShop }) => {
  const {isLogged} = useAuth()
  return (
    <Card>
    </Card>
  );
};
export default ShopItem;