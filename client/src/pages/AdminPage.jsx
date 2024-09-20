import axios from "axios";
import { useForm } from "react-hook-form";

function AdminPage() {
  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm();

  const onSubmit = (data) => {
    console.log(data);

    const formData = new FormData();
    formData.append("category", data.category);
    formData.append("customWorks", data.customWorks);
    formData.append("image", data.image[0]);
    formData.append("paperSize", data.paperSize);
    formData.append("price", data.price);

    axios
      .post("/api/products/upload", formData)
      .then((result) => {
        console.log(result);
        reset();
      })
      .catch((err) => {
        console.log(err);
      });
  };

  return (
    <>
      <h1 className="my-8 text-center text-5xl font-bold text-primaryBlue">
        Admin Page
      </h1>
      <form
        onSubmit={handleSubmit(onSubmit)}
        encType="multipart/form-data"
        className="mx-auto flex min-h-[50vh] w-1/2 flex-col items-center border border-black"
      >
        <p className="mt-6 w-1/2">Select Category</p>
        <select
          className="my-2 w-1/2 rounded-sm border border-black"
          {...register("category")}
        >
          <option value="Pencil Portrait">Pencil Portrait</option>
          <option value="Color Portrait">Color Portrait</option>
          <option value="Caricature">Caricature</option>
          <option value="Custom Works">Custom Works</option>
        </select>

        <p className="mt-2 w-1/2">Enter Custom Works:</p>
        <input
          className="my-1 w-1/2 rounded-sm border border-black"
          {...register("customWorks")}
        />

        <p className="mt-2 w-1/2">Upload Image</p>
        <input
          className="mb-2 w-1/2 border border-black"
          type="file"
          {...register("image")}
        />

        <p className="mt-2 w-1/2">Select paper size</p>
        <select
          className="mb-2 w-1/2 rounded-sm border border-black"
          {...register("paperSize")}
        >
          <option value="A4">A4</option>
          <option value="A3">A3</option>
          <option value="Small">Single Line Drawing</option>
        </select>

        <p className="mt-2 w-1/2">Enter Price</p>
        <input
          className="mb-2 w-1/2 rounded-sm border border-black"
          type="number"
          {...register("price", { required: "Price is required" })}
        />
        {errors.price && <p className="text-red-500">{errors.price.message}</p>}
        <button
          className="my-4 w-1/2 rounded bg-green-400 py-4 font-bold"
          type="submit"
        >
          Sumbit
        </button>
      </form>
    </>
  );
}

export default AdminPage;
