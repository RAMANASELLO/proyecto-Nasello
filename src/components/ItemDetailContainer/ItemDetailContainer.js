import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import data from "../ItemListContainer/mock-data";
import ItemDetail from "../ItemDetail/ItemDetail";

export const ItemDetailContainer = () => {
  const { productId } = useParams();
  const [items, setItems] = useState(null);

  const getData = (id) => {
    return new Promise((resolve, reject) => {
      const producto = data.find((item) => item.id === parseInt(id));

      setTimeout(() => {
        resolve(data);
      }, 2000);
    });
  };

  useEffect(() => {
    getData(productId).then((data) => {
      setItems(data);
    });
  }, [productId, items]);

  return (
    <div>
      <ItemDetail producto={items} productId={productId} />
    </div>
  );
};

export default ItemDetailContainer;































// export const ItemDetailContainer = () =>{ 
//   const [data,setData] = useState ([]);
//   const {categoryId}= useParams()

//   useEffect(() => {
//     getData.then((result) => {
//         if(categoryId){
//             const newProducts= result.filter(item=> item.id === categoryId);
//             setItems (newProducts) 
//         }   else{
//             setItems(result)
//         }

       
//     })
// }, [categoryId]);  





















    
// //   useEffect(() => {
// //       const getData = new Promise(resolve =>{
// //           setTimeout(() => {
// //               resolve(data)
// //           }, 2000);
// //   })

// //   getData.then(res => setData(res.filter(item => item.categoria === categoryId)))
// //   }, [])

// return (
//     <ItemDetail data={data}/>
// )}





// //   const getData =
// //      new Promise((resolve, reject) => {
// //     setTimeout(() => {
// //         resolve(data[0])
// //     }, 2000);
// // });

// // useEffect(() => {
// //     getData.then((result) => {
// //         setItems (result) 
// //     })
// // }, []);    



// export default ItemDetailContainer