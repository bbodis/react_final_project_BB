import ShopItem from "./ShopItem";
const ShopList = ({Shops, deleteShop}) => {
  return (
    <div>
      {Shops.length == 0 ? <h2>Nincs megjeleníthető termék</h2> : Shops.map((Shop) => (
        <ShopItem key={Shop.id} id={Shop.id} name={Shop.name} img_url={Shop.img_url} price={Shop.price} stock={Shop.stock} category={Shop.category} description={Shop.description} deleteShop={deleteShop}/>
      ))}
    </div>
  );
};
export default ShopList;