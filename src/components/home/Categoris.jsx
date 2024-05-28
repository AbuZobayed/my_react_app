export default function Categoris() {
  return (
    <div>
      <h1 className="mt-12 text-center text-3xl font-bold ">
        Our Top Categories
      </h1>
      <div className="flex justify-center mt-6 gap-5 ">
        <div className="card w-96 bg-base-100 border-violet-300 border-4 shadow-xl">
          <div className="card-body">
            <div className="flex flex-wrap justify-center">
              <img className="" src="/src/assets/img/icon/shoe1.png" alt="" />
            </div>
            <h3 className="text-center text-2xl font-bold uppercase">Boot
</h3>

            <div className="card-actions justify-end"></div>
          </div>
        </div>
        <div className="card w-96 bg-base-100  border-violet-300 border-4  shadow-xl">
          <div className="card-body">
            <div className="flex flex-wrap justify-center">
              <img className="" src="/src/assets/img/icon/shoe.png" alt="" />
            </div>
            <h3 className="text-center text-2xl font-bold uppercase">Loafer</h3>

            <div className="card-actions justify-end"></div>
          </div>
        </div>
        <div className="card w-96 bg-base-100  border-violet-300 border-4  shadow-xl">
          <div className="card-body">
            <div className="flex flex-wrap justify-center">
              <img className="" src="/src/assets/img/icon/shoe2.png" alt="" />
            </div>
            <h3 className="text-center text-2xl font-bold uppercase"> SportsShoe</h3>

            <div className="card-actions justify-end"></div>
          </div>
        </div>
      </div>
    </div>
  );
}
