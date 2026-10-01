import express from "express";
import dotenv from "dotenv";

import appRouter from "./router/app.js";
import productsRouter from "./router/products.js";

dotenv.config();

const app = express();

const PORT = process.env.PORT || 5000;


app.set("view engine", "ejs");
app.set("views", "./pages");

app.use(express.json());


app.use("/", appRouter);
app.use("/products", productsRouter);


app.listen(PORT, () => {
    console.log(`Server running on http://localhost:${PORT}`);
});