import propTypes from "prop-types";
import { IndianRupee } from "lucide-react";

function Card({ product }) {
  return (
    <>
      <div className="m-2 w-full rounded bg-imageFrame px-4 pb-4 sm:max-w-[30%]">
        <p className="my-2 text-center text-lg font-medium">
          {product.component === "Custom Works"
            ? product.customWorks
            : product.workType}
        </p>
        <div className="h-[400px]">
          <img
            className="h-full w-full object-cover"
            src={product.imageUrl}
            alt=""
          />
        </div>
        {product.category !== "Custom Works" && (
          <div>
            <p className="my-2 text-lg font-medium">
              Paper Size: {product.paperSize}
            </p>
            <p className="flex items-center text-lg font-medium">
              <IndianRupee size={16} /> {product.price}
            </p>
          </div>
        )}
      </div>
    </>
  );
}

Card.propTypes = {
  product: propTypes.object.isRequired,
};

export default Card;
