const About = () => {
  return (
    
    <div className="container mx-auto  m-12">
      <div className="grid grid-cols-2">
        <div className="">
          <img className="w-[600px]" src="/src/assets/img/about.png" alt="" />
        </div>
        <div className="">
          <h1 className="text-7xl font-semibold text-violet-600">About Us</h1>
          <p className="mt-4">
            A shoe is an item of footwear intended to protect and comfort the
            human foot. Though the human foot can adapt to varied terrains and
            climate conditions, it is vulnerable, and shoes provide protection.
            Form was originally tied to function, but over time, shoes also
            became fashion items. Some shoes are worn as safety equipment, such
            as steel-toe boots, which are required footwear at industrial
            worksites. Additionally, shoes have often evolved into many
            different designs, such as high heels, which are most commonly worn
            by women during fancy occasions. Contemporary footwear varies vastly
            in style, complexity and cost. Basic sandals may consist of only a
            thin sole and simple strap and be sold for a low cost.
          </p>
          <div className="card w-auto bg-base-100 mt-20 shadow-xl">
            <div className="card-body">
              <p>
              The earliest known shoes are sagebrush bark sandals dating from approximately 7000 or 8000 BC, found in the Fort Rock Cave in the US state of Oregon in 1938.- <span className="font-bold">Earliest evidence</span>{" "}
              </p>
            </div>
          </div>
          <button className="btn bg-violet-600 mt-8 uppercase  text-white">Read more</button>
        </div>
      </div>
    </div>
  );
};

export default About;
