const express = require("express");
const app = express();
const cors = require("cors");

const ProductRoute = require("./routes/productRoute");

const connectDB = require("./config/db");
connectDB();

require("dotenv").config();
const PORT = process.env.PORT || 4000;

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.use(cors());

app.use("/api", ProductRoute);

app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});
