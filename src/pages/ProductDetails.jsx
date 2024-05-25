import { useLoaderData } from "react-router-dom";

export default function ProductDetails() {
  const shoe = useLoaderData();

  const { title, price, image_url,  description, brand } = shoe;
  
  return (
    <div>
      <h1 className="text-5xl text-center font-bold">{title}</h1>
      <img className="h-[600px]" src={image_url} alt="product image" />
      <h3 className="texl-2xl font-semibold">{price } $$</h3>
      <h3 className="texl-xl font-semibold">{brand}</h3>
      <p className="text-lg font-light">{description}</p>
    </div>
  );
}
