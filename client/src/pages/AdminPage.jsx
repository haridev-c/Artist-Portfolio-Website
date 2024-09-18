import { useState } from "react";
import axios from "axios";

function AdminPage() {
  const [category, setCategory] = useState("Pencil Portrait");
  const [image, setImage] = useState(null);
  const [customWorks, setCustomWorks] = useState("");
  const [workType, setWorkType] = useState("Single");
  const [paperSize, setPaperSize] = useState("A4");
  const [price, setPrice] = useState(0);

  const handleSubmit = (e) => {
    e.preventDefault();
    const formData = new FormData();
    formData.append("image", image);
    formData.append("category", category);
    formData.append("customWorks", customWorks);
    formData.append("workType", workType);
    formData.append("paperSize", paperSize);
    formData.append("price", price);

    axios
      .post("http://localhost:5050/api/products/upload", formData)
      .then((result) => {
        console.log(result);
        window.location.reload();
      })
      .catch((err) => {
        console.log(err);
      });
  };

  return (
    <>
      <div className="container mt-5 text-center">
        <h1>Admin Page</h1>
        <div className="container mt-3 border">
          <h4 className="m-4">Add a New Product</h4>

          {/* Start of Form */}
          <form onSubmit={handleSubmit}>
            <div className="text-start">
              {/* Select the category of product */}
              <div className="row align-items-center">
                <div className="col">
                  <label
                    htmlFor="selectCategory"
                    className="form-label align-middle"
                  >
                    Select Category
                  </label>
                </div>
                <div className="col">
                  <select
                    id="selectCategory"
                    className="form-select"
                    onChange={(e) => setCategory(e.target.value)}
                  >
                    <option value="Pencil Portrait">Pencil Portrait</option>
                    <option value="Color Portrait">Color Portrait</option>
                    <option value="Caricature">Caricature</option>
                    <option value="Custom Works">Custom Works</option>
                  </select>
                </div>
              </div>

              <div className="row">
                <div className="col">
                  <label htmlFor="caricatureType" className="form-label">
                    Enter Custom Work
                  </label>
                </div>
                <div className="col">
                  <input
                    type="text"
                    id="caricatureType"
                    className="form-control"
                    onChange={(e) => setCustomWorks(e.target.value)}
                  />
                </div>
              </div>

              {/* Select File */}
              <div className="row">
                <div className="col">
                  <label htmlFor="file" className="form-label">
                    Upload Image
                  </label>
                </div>
                <div className="col">
                  <input
                    className="form-control"
                    type="file"
                    name=""
                    id=""
                    onChange={(e) => setImage(e.target.files[0])}
                  />
                </div>
              </div>

              {/* Select Work Type */}
              <div className="row">
                <div className="col">
                  <label htmlFor="type" className="form-label">
                    Select work type
                  </label>
                </div>
                <div className="col" id="type">
                  <select
                    className="form-select"
                    id="type"
                    onChange={(e) => setWorkType(e.target.value)}
                  >
                    <option value="Single">Single</option>
                    <option value="Couple">Couple</option>
                    <option value="Single Line Drawing">
                      Single Line Drawing
                    </option>
                  </select>
                </div>
              </div>

              {/* Select Page Size */}
              <div className="row">
                <div className="col">
                  <label htmlFor="pageSize" className="form-label">
                    Select Paper Size
                  </label>
                </div>

                <div className="col">
                  <select
                    id="pageSize"
                    className="form-select"
                    onChange={(e) => setPaperSize(e.target.value)}
                  >
                    <option value="A4">A4</option>
                    <option value="A3">A3</option>
                    <option value="Small">Single Line Drawing</option>
                  </select>
                </div>
              </div>

              {/* Enter Price */}
              <div className="row">
                <div className="col">
                  <label htmlFor="price" className="form-label">
                    Enter price
                  </label>
                </div>
                <div className="col">
                  <input
                    type="number"
                    className="form-control"
                    onChange={(e) => setPrice(e.target.value)}
                  />
                </div>
              </div>

              {/* Submit button */}
              <div className="row justify-content-center my-3">
                <div className="col-auto">
                  <button type="submit" className="btn btn-success">
                    Add
                  </button>
                </div>
              </div>
            </div>
          </form>
        </div>
      </div>
    </>
  );
}

export default AdminPage;
