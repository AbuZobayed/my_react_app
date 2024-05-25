import { useEffect, useState } from "react";
import SingleProducts from "../components/SingleProducts";

export default function AllProducts() {
    const [products, setProducts] = useState([])

    useEffect(() =>{
        fetch(`http://localhost:3000/shoes`)
        .then((res)=>res.json())
        .then((data) => setProducts(data)) 
    },[])
  return (
    <div>
      <h1 className="text-5xl font-bold text-center">All Products</h1>
      <div className="my-16 flex flex-wrap  gap-4">
        {
            products.map((shoe) => 
            <SingleProducts key={shoe.id} shoe={shoe} />
            
            )
        }
      </div>
    </div>
  );
}
