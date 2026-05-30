import ShopItem from "./ShopItem";
const ShopList = ({Shops}) => {
  return (
    <div>
      {Shops.length == 0 ? <h2>Nincs megjeleníthető utazás</h2> : Shops.map((Shop, index) => (
        <ShopItem key={index} name={Shop.name} weight={Shop.weight} category={Shop.category} description={Shop.description}/>
      ))}
    </div>
  );
};
export default ShopList;