const express = require("express");
const cors = require("cors");
const app = express();

const db = require("./config/db");
const fuelRoutes = require("./routes/fuel");
const salesRoutes = require("./routes/sales"); // ✅ added

app.use(cors());
app.use(express.json());

app.use("/fuel", fuelRoutes);
app.use("/sales", salesRoutes); // ✅ added

app.get("/", (req, res) => {
  res.send("API is running...");
});

app.get("/test", (req, res) => {
  res.send("Test route works");
});

app.listen(3000, () => {
  console.log("Server running on port 3000");
});