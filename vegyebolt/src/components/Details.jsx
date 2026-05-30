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
      <h1>{shop.destination}</h1>
      <img
        src={shop.img}
        alt={shop.destination}
        width="500"
      />
      <p>
        <strong>Leírás:</strong> {shop.notes}
      </p>
      <button onClick={() => navigate(-1)}>
        Vissza
      </button>
    </div>
  );
}
export default Details;