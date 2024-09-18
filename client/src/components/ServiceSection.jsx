import ServiceCard from "./ServiceCard";
import propTypes from "prop-types";

function ServiceSection({ service, products }) {
  return (
    <>
      <section className="my-4 mb-16 flex flex-col items-center">
        <h2 className="mt-8 text-primaryBlue">MY SERVICES</h2>
        <h1 className="my-4 text-5xl font-thin">{service}</h1>
        <div className="flex w-full flex-wrap justify-around px-2">
          {products.map((product) => (
            <ServiceCard key={product._id} product={product} />
          ))}
        </div>
      </section>
    </>
  );
}

ServiceSection.propTypes = {
  service: propTypes.string.isRequired,
  products: propTypes.array.isRequired,
};

export default ServiceSection;
