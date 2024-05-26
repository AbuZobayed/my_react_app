import { Link, Outlet } from "react-router-dom";

const DashboardLayout = () => {
  return (
    <div className="grid grid-cols-12">
      <div className="col-span-2 bg-violet-200 min-h-screen p-12">
        <ul>
          <li className="border  bg-violet-500 rounded-xl mb-4 p-4 text-center text-white font-semibold text w-full">
            <Link to={""}>Dashboard</Link>
          </li>
          <li className="border bg-violet-500 rounded-xl mb-4 p-4 text-center text-white font-semibold  text w-full">
            <Link to={"all-products"}>All Products</Link>
          </li>
          <li className="border bg-violet-500 rounded-xl mb-4 p-4 text-center text-white font-semibold text w-full">
            <Link to={"add-products"}>Add Product</Link>
          </li>
          <li className="border bg-violet-500 rounded-xl mb-4 p-4 text-center text-white font-semibold  text w-full">
            <Link to={"/"}>Home</Link>
          </li>
        </ul>    
      </div>
      <div className="col-span-10 p-20">
        <Outlet />
      </div>
    </div>
  );
};

export default DashboardLayout;