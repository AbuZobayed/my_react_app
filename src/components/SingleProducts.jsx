/* eslint-disable react/prop-types */

import { Link } from "react-router-dom";

const SingleProducts = ({ shoe }) => {
  // eslint-disable-next-line no-unused-vars

  console.log(shoe);

  const { id, title, brand, price, description, image_url } = shoe;
  return (
    <div className="card w-96 bg-base-100 shadow-xl">
      <figure>
        <img src={image_url} alt="Shoes" />
      </figure>
      <div className="card-body border shadow-2xl ">
        <h2 className="card-title text-violet-600 uppercase font-semibold  ">
          {title}
        </h2>
        <p>{description}</p>
        <div className="flex flex-wrap mt-0 gap-2">
          <img className="w-[24px] h-[24px]"  src="/src/assets/img/icon/1.png" alt="" />
          <img className="w-[24px] h-[24px]"  src="/src/assets/img/icon/1.png" alt="" />
          <img className="w-[24px] h-[24px]" src="/src/assets/img/icon/1.png" alt="" />
          <img className="w-[24px] h-[24px]" src="/src/assets/img/icon/3.png" alt="" />
          <img className="w-[24px] h-[24px]" src="/src/assets/img/icon/2.png" alt="" />
        </div>
        <h3 className="text-xl font-semibold">{brand}</h3>
        <h3 className="text-xl font-semibold"><span className="text-orange-400">$</span>{price}</h3>

        <div className="card-actions justify-center">
          <button className="btn bg-violet-600 text-white w-3/4 font-sans">
            <Link to={`/products/${id}`}>See details</Link>
          </button>
        </div>
      </div>
    </div>
  );
};

export default SingleProducts;
