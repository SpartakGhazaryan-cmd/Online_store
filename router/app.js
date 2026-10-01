import express from "express";

const router = express.Router();


router.get("/", async (req, res) => {
    try {
        const response = await fetch(
            "https://fakestoreapi.com/products"
        );

        if (!response.ok) {
            throw new Error("Failed to fetch products");
        }

        const products = await response.json();

        res.json({
            ok: true,
            products
        });
    } catch (error) {
        res.status(500).json({
            ok: false,
            message: error.message
        });
    }
});


router.get("/about", (req, res) => {
    res.render("about");
});


router.get("/contacts", (req, res) => {
    res.render("contacts");
});

export default router;