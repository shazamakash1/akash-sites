// import { useAuth } from "../store/auth";

export const Service = () => {
  // let { services } = useAuth();

  // console.log(services);

     const services = [
      {
       provider: "Akash Sites",
        price: "$10",
       service: "JavaScript Best",
        description: "The world's best Javascript Codes",
     },
     {
      provider: "Akash Sites",
       price: "$20",
      service: "React Course",
       description: "World's Best React Course",
    },
    {
      provider: "Akash Sites",
       price: "$30",
      service: "Mongo Course",
       description: "World's Best Mongo Course",
    },
    ];

  return (
    <>
      <section className="section-services">
        <div className="container">
          <h1 className="main-heading">Services</h1>
        </div>
        <div className="container grid grid-three-cols">
          {services.map((curElem, index) => {
            const { service, description, price, provider } = curElem;

            return (
              <div className="card" key={index}>
                <div className="card-img">
                  <img
                    src="/images/design.png"
                    alt="Our Services Information"
                    width="200"
                  />
                </div>
                <div className="card-details">
                  <div className="grid grid-two-cols">
                    <p>{provider}</p>
                    <p>{price}</p>
                  </div>
                  <h2>{service}</h2>
                  <p>{description}</p>
                </div>
              </div>
            );
          })}
        </div>
      </section>
    </>
  );
};
