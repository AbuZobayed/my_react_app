export default function AddProducts() {
  return (
    <div>
      <h1 className="text-5xl font-bold text-center">Add a Product</h1>

      <div className="my-16">
        <form>
          <div className="mt-3">
            <input
              className="bg-gray-100 p-4 w-full border rounded-lg border-indigo-600 "
              type="text"
              name="title"
              placeholder="Title"
            />
          </div>
          <div className="mt-3">
            <input
              className="bg-gray-100 p-4 w-full border rounded-lg border-indigo-600 "
              type="text"
              name="brand"
              placeholder="Brand"
            />
          </div>
          <div className="mt-3">
            <input
              className="bg-gray-100 p-4 w-full border rounded-lg border-indigo-600 "
              type="number"
              name="price"
              placeholder="Price"
            />
          </div>
          <div className="mt-3">
            <input
              className="bg-gray-100 p-4 w-full border rounded-lg border-indigo-600 "
              type="text"
              name="dscription"
              placeholder="Dscription"
            />
          </div>
          <div className="mt-3">
            <input
              className="bg-gray-100 p-4 w-full border rounded-lg border-indigo-600 "
              type="text"
              name="image_url"
              placeholder="Image Url"
            />
          </div>
          <div className="mt-3">
            <input
              className="bg-gray-100 p-4 w-full border rounded-lg border-indigo-600 "
              type="text"
              name="image_url"
              placeholder="ID"
            />
          </div>
          <div className="mt-2 flex justify-center items-center ">
            <input className="btn mt-4 text-white  p-4 bg-indigo-600" type="submit" value="Add Product" />
          </div>
        </form>
      </div>
    </div>
  );
}
