import { useEffect, useState } from "react";
import ItemCount from '../ItemCount/ItemCount'

const ItemDetail = ({ producto, productId }) => {
  const [obj, setObj] = useState(null);

  const onAdd=(contador) =>{
    console.log(`Recibo ${contador}`)
  }


  useEffect(() => {
    let prod;
    if (producto) {
      prod = producto?.filter((item) => item.id === Number(productId));
      setObj(prod[0]);
    }
  }, [producto]);

  return (

    <div>
      <p>
        <img src={obj?.image} alt="" />
        <h1>{obj?.name}</h1>
        <p>{obj?.description}</p>
        <p>{obj?.price}</p>
       </p>

       <p>
        <ItemCount initial={1} stock={10} onAdd={onAdd}/>
      </p>
    </div>
  );
};

export default ItemDetail;