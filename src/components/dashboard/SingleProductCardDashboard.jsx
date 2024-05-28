/* eslint-disable react/prop-types */
import { Link } from "react-router-dom";

// eslint-disable-next-line react/prop-types
const SingleProductCardDashboard = ({ shoe, onDelete }) => {
  const { id, title, brand, price, description, image_url } = shoe;



  const handleDelete = async () => {
    await fetch(`http://localhost:3000/shoes/${id}`, {
      method: "DELETE",
    })
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
        onDelete(id);
      });
  };

  return (
    <div className="card w-96 bg-base-100 shadow-xl">
      <figure>
        <img src={image_url} alt="Shoes" />
      </figure>
      <div className="card-body">
        <h2 className="card-title uppercase text-violet-600 font-semibold">{title}</h2>
        <p>{description}</p>
        <h3 className="text-xl font-semibold">{brand}</h3>
        <h3 className="text-xl font-semibold text-violet-600 ">${price}</h3>
        
        <div className="card-actions justify-center gap-4">
         
          <button className="btn bg-green-500 text-white">
            <Link to={`edit/${id}`}>Edit</Link>
          </button>
          <button className="btn bg-violet-600 text-white">
            <Link to={`/products/${id}`}>See details</Link>
          </button>
          <button onClick={handleDelete} className="btn bg-red-400 text-white">
            Delete
          </button>
        </div>
      </div> 
    </div>

    // my work 
    // <div className="card lg:card-side bg-base-100 shadow-xl">
    //   <figure>
    //     <img
    //       src={image_url}
    //       alt="Album"
    //     />
    //   </figure>
    //   <div className="card-body">
    //     <h1>{brand}</h1>
    //     <h2 className="card-title">{title}</h2>
    //     <p>{price}</p>
    //     <p>{description}</p>
    //     <div className="card-actions justify-end">
    //       <button className="btn btn-primary">Listen</button>
    //     </div>
    //   </div>
    // </div>
  );
};

export default SingleProductCardDashboard;
