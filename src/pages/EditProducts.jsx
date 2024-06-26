import { useState } from "react";
import { useLoaderData } from "react-router-dom";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

export default function EditProducts() {
  const shoe = useLoaderData();

  const [title, setTitle] = useState(shoe.title);
  const [price, setPrice] = useState(shoe.price);
  const [brand, setBrand] = useState(shoe.brand);
  const [id, setId] = useState(shoe.id);
  const [description, setDescription] = useState(shoe.description);
  const [image_url, setImageURL] = useState(shoe.image_url);

  // console.log(shoe);

  const handleSubmit = async (e) => {
    e.preventDefault();
    toast("Product Update Successfully");

    const form = e.target;
    const id = form.id.value;
    const title = form.title.value;
    const brand = form.brand.value;
    const price = form.price.value;
    const description = form.description.value;
    const image_url = form.image_url.value;

    const data = { image_url, title, brand, price, description, id };

    console.log(data);

    await fetch(`http://localhost:3000/shoes/${shoe.id}`, {
      method: "PATCH",
      headers: {
        "Content-type": "application/json",
      },
      body: JSON.stringify(data),
    })
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
      });
  };
  return (
    <div>
      <h1 className="text-5xl font-bold text-center">Edit Product</h1>

      <div className="my-16">
        <form onSubmit={handleSubmit}>
          <div className="mt-3">
            <input
              className="bg-gray-100 p-4 w-full border rounded-lg border-indigo-600 "
              type="text"
              name="title"
              placeholder="Title"
              value={title}
              onChange={(e) => setTitle(e.target.value)}
            />
          </div>
          <div className="mt-3">
            <input
              className="bg-gray-100 p-4 w-full border rounded-lg border-indigo-600 "
              type="text"
              name="brand"
              placeholder="Brand"
              value={brand}
              onChange={(e) => setBrand(e.target.value)}
            />
          </div>
          <div className="mt-3">
            <input
              className="bg-gray-100 p-4 w-full border rounded-lg border-indigo-600 "
              type="number"
              name="price"
              placeholder="Price"
              value={price}
              onChange={(e) => setPrice(e.target.value)}
            />
          </div>
          <div className="mt-3">
            <input
              className="bg-gray-100 p-4 w-full border rounded-lg border-indigo-600 "
              type="text"
              name="description"
              placeholder="Dscription"
              value={description}
              onChange={(e) => setDescription(e.target.value)}
            />
          </div>
          <div className="mt-3">
            <input
              className="bg-gray-100 p-4 w-full border rounded-lg border-indigo-600 "
              type="text"
              name="image_url"
              placeholder="Image Url"
              value={image_url}
              onChange={(e) => setImageURL(e.target.value)}
            />
          </div>
          <div className="mt-3">
            <input
              className="bg-gray-100 p-4 w-full border rounded-lg border-indigo-600 "
              type="text"
              name="id"
              placeholder="ID"
              value={id}
              onChange={(e) => setId(e.target.value)}
            />
          </div>
          <div className="mt-2 flex justify-center items-center ">
            <input
              className="btn mt-4 text-white  p-4 bg-indigo-600"
              type="submit"
              value="Update Product"
            />
            <ToastContainer />
          </div>
        </form>
      </div>
    </div>
  );
}
