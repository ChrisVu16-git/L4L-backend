const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors");
require('dotenv').config();

const productRoutes = require("./routes/productRoutes");
const userRoutes = require("./routes/userRoutes");




const app = express();
app.use(cors());
app.use(express.json());
app.use("/api/products", productRoutes);
app.use("/api/users", userRoutes);


mongoose
  .connect(process.env.MONGO_URI) // Remove useNewUrlParser and useUnifiedTopology
  .then(() => console.log("MongoDB Connected"))
  .catch((err) => console.log(err));



app.get("/", (req, res) => res.send("L4L E-commerce Backend Running"));

app.listen(4000, () => console.log("Server running on port 4000"));
