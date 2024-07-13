
import './Product.css';


 function Product({product, handelToCart}) {


  const{name, description, img,  price , currency}= product
  return (
<div className="card w-96 bg-base-100 shadow-xl">
  <figure><img src={img} alt="Shoes" /></figure>
  <div className="card-body">
    <h2 className="card-title">{name}</h2>
    <p>{description}</p>
    <h2>Price:{price} {currency}</h2>
    <div className="card-actions justify-end">
      <button onClick={()=>{handelToCart(product)}} className="btn btn-primary">Add to Cart</button>
    </div>
  </div>
</div>
  )
}

export default Product;
