import ShopItem from "./ShopItem";
const ShopList = ({ Shops, deleteShop }) => {
  return (
    <div>
      {Shops.length == 0 ? <h2>Nincs megjeleníthető utazás</h2> : Shops.map((Shop) => (
        <ShopItem key={Shop.id} Shop={Shop} deleteShop={deleteShop} />
      ))}
    </div>
  );
};
export default ShopList;