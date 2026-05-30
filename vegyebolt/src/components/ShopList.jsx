import ShopItem from "./ShopItem";
const ShopList = ({Shops, deleteShop}) => {
  return (
    <div>
      {Shops.length == 0 ? <h2>Nincs megjeleníthető utazás</h2> : Shops.map((Shop) => (
        <ShopItem key={Shop.id} id={Shop.id} name={Shop.name} img={Shop.img} price={Shop.price} stock={Shop.stock} category={Shop.category} description={Shop.description} deleteShop={deleteShop}/>
      ))}
    </div>
  );
};
export default ShopList;