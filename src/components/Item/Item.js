import {Link} from 'react-router-dom'

export const Item = ({item}) => {
  console.log("chau",item)
    return (
      <div>
          <img src={image} alt="" />
          <h1>{item.name}</h1>
          <p>{item.description}</p>
          <p>{item.price}</p>
          <Link to={`/item/${id}`}>
            <button className="boton-ver">Ver detalle</button>
          </Link>
      </div>
    );
  };
  
  export default Item