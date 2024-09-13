const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors");
const productRouter = require("./routes/productRoutes");
const dotenv = require("dotenv");
const path = require("path");

//creating express server
const app = express();

app.use(express.json());
app.use(cors());
app.use("/uploads", express.static(path.join(__dirname, "/uploads")));
dotenv.config();

//connecting to database
const source = process.env.CONN_STRING;
mongoose
  .connect(source)
  .then(() => {
    console.log("Connected to DB");
  })
  .catch((err) => {
    console.log(err);
  });

//routes
app.use("/api/products", productRouter);

//making the server listen to port
app.listen(5050, () => {
  console.log(`Server is listening at http://localhost:5050`);
});
