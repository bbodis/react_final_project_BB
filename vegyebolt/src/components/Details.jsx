import { useParams, useNavigate } from "react-router-dom";
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
    <div>
      <p>
        <strong>Leírás:</strong><br/>
        {shop.description}
      </p>
      <button onClick={() => navigate(-1)}>
        Vissza
      </button>
    </div>
  );
}
export default Details;