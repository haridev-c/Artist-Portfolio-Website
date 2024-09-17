import Card from "./Card";
import propTypes from "prop-types";

function Service({ service, products }) {
  return (
    <>
      {/* <div className="container">
        <p className="text-primary text-uppercase mb-2 text-center">
          My Services
        </p>
        <h1 className="display-6 mb-4 text-center">{props.service}</h1>
        <div className="container">
          <div className="row justify-content-center">
            {props.products.map((product) => (
              <Card key={product._id} product={product} />
            ))}
          </div>
        </div>
      </div> */}

      <section className="flex flex-col items-center">
        <h2 className="mt-8 text-primaryBlue">MY SERVICES</h2>
        <h1 className="my-4 text-5xl font-thin">{service}</h1>
        <div className="flex w-full flex-wrap justify-around px-2">
          {products.map((product) => (
            <Card key={product._id} product={product} />
          ))}
        </div>
      </section>
    </>
  );
}

Service.propTypes = {
  service: propTypes.string.isRequired,
  products: propTypes.array.isRequired,
};

export default Service;
