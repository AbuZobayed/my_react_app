import { useLoaderData } from "react-router-dom";

export default function ProductDetails() {
  const shoe = useLoaderData();

  const { title, price, image_url,  description, brand } = shoe;
  
  return (
    // <div>
    //   <h1 className="text-5xl text-center font-bold">{title}</h1>
    //   <img className="h-[600px]" src={image_url} alt="product image" />
    //   <h3 className="texl-2xl font-semibold">{price } $$</h3>
    //   <h3 className="texl-xl font-semibold">{brand}</h3>
    //   <p className="text-lg font-light">{description}</p>
    // </div>

    <div className="card lg:card-side bg-base-100 border rounded-xl m-24 shadow-xl">
  <figure><img className="h-[500px]" src={image_url} alt="Album"/></figure>
  <div className="card-body">
    <h2 className="card-title">{title}</h2>
    <p>{description}</p>
    <h1> Made By: <span className="font-bold">{brand}</span> </h1>
    <h2 className="text-orange-400 font-sans">Price: ${price}</h2>
    
  </div>
</div>
  );
}
