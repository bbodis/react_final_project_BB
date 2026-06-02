import { useParams, useNavigate } from "react-router-dom";
import styles from "./Details.module.css"
import Card from "../wrappers/Card";
function Details({ shops }) {
  const { id } = useParams();
  const navigate = useNavigate();
  const shop = shops.find(
    (item) => item.id === Number(id)
  );
  if (!shop) {
    return <h1>Nincs ilyen utazás</h1>;
  }
  return (
    <Card>
    <div>
      <p><strong>Leírás:</strong></p>
      <p className={styles.margin}>
      {shop.description}
      </p>
      <button onClick={() => navigate(-1)} className={styles.backBtn}>Vissza</button>
    </div>
    </Card>
  );
}
export default Details;