import Card from "./Card";
import propTypes from "prop-types";

function Service(props) {
  return (
    <>
      <div className="container">
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
      </div>
    </>
  );
}

Service.propTypes = {
  service: propTypes.string.isRequired,
  products: propTypes.array.isRequired,
};

export default Service;
