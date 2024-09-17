import { Link } from "react-router-dom";
import propTypes from "prop-types";

function Header({ service, products }) {
  return (
    <>
      <section className="bg-headerBg flex min-h-[50vh] flex-col p-2 sm:flex-row">
        <div className="flex w-1/2 flex-col justify-center sm:p-14">
          <h1 className="my-6 text-5xl font-light">{service}</h1>
          <p className="text-xl text-lightGrey">
            <Link to={"/"} className="text-primaryBlue">
              Home /
            </Link>{" "}
            {service}
          </p>
        </div>
        <div className="flex flex-grow items-start justify-around">
          <div className="bg-white p-4">
            <img
              src={products[0].imageUrl}
              className="sm:max-w-[250px]"
              alt=""
            />
          </div>
          <div className="bg-white p-4">
            <img
              src={products[1].imageUrl}
              className="sm:max-w-[250px]"
              alt=""
            />
          </div>
        </div>
      </section>
    </>
  );
}

Header.propTypes = {
  service: propTypes.string.isRequired,
  products: propTypes.array.isRequired,
};

export default Header;
