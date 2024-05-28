const Accordian = () => {
  return (
    <div className="my-20 px-8 w-3/4 mx-auto">
      <h1 className="my-16 text-center font-bold text-3xl">
        Frequently Asked Questions!
      </h1>
      <div className="collapse collapse-arrow bg-violet-100">
        <input type="radio" name="my-accordion-2" defaultChecked />
        <div className="collapse-title text-xl font-medium text-violet-500">
          Most Expensive Shoes In The World 2021
        </div>
        <div className="collapse-content">
          <p>
            Passion Diamond Shoes Price: $23.6 million Brand Name: Passion
            Jewellers Location: Dubai Made of: gold, diamond, leather and silk
            Users: Women
          </p>
        </div>
      </div>
      <div className="collapse collapse-arrow bg-base-200">
        <input type="radio" name="my-accordion-2" />
        <div className="collapse-title text-xl font-medium text-violet-500">
          What is the top 1 shoe brand?
        </div>
        <div className="collapse-content">
          <p>
            {" "}
            Nike. Nike is an American multinational corporation that designs,
            develops, manufactures, and markets footwear, clothes, equipment,
            and accessories in the whole world.
          </p>
        </div>
      </div>
    </div>
  );
};

export default Accordian;
