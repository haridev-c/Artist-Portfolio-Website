import { useParams } from "react-router-dom";

// redux imports
import { useGetProductsQuery } from "@/app/apiSlice";

// component imports
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import HeaderSection from "../components/HeaderSection";
import ServiceSection from "../components/ServiceSection";

function CategoryArtsPage() {
  const { category } = useParams();
  const { data, isLoading } = useGetProductsQuery(category);

  if (isLoading) return <p>Loading...</p>;

  return (
    <>
      <Navbar />
      <HeaderSection service="Pencil Portraits" products={data.products} />
      <ServiceSection service="Pencil Portrait" products={data.products} />
      <Footer />
    </>
  );
}

export default CategoryArtsPage;
