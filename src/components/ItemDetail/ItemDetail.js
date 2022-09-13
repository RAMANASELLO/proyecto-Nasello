import { useEffect, useState } from "react";

const ItemDetail = ({ producto, productId }) => {
  const [obj, setObj] = useState(null);
  useEffect(() => {
    let prod;
    if (producto) {
      prod = producto?.filter((item) => item.id === Number(productId));
      setObj(prod[0]);
    }
  }, [producto]);

  return (
    <div>
      <img src={obj?.image} alt="" />
      <h1>{obj?.name}</h1>
      <p>{obj?.description}</p>
      <p>{obj?.price}</p>
    </div>
  );
};

export default ItemDetail;