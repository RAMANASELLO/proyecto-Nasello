import Item from "../Item/Item";
import ItemCount from '../ItemCount/ItemCount'


const ItemDetail = ({item}) => {
console.log("hola", item)
  return (
      <div>
        <img src={image} alt={name}/>
        <h1>{name}</h1>
        <p>{description}</p>
        <p>{price}</p>
      </div>
  );
};

export default ItemDetail