import express from "express";

const router = express.Router();


router.get("/", (req, res) => {
    res.json({
        ok: true,
        message: "Բարի գալուստ ապրանքների բաժին"
    });
});


router.get("/items", async (req, res) => {
    try {
        const response = await fetch(
            "https://fakestoreapi.com/products?limit=5"
        );

        if (!response.ok) {
            throw new Error("Failed to fetch items");
        }

        const items = await response.json();

        res.json({
            ok: true,
            items
        });
    } catch (error) {
        res.status(500).json({
            ok: false,
            message: error.message
        });
    }
});


router.get("/categories", async (req, res) => {
    try {
        const response = await fetch(
            "https://fakestoreapi.com/products/categories"
        );

        if (!response.ok) {
            throw new Error("Failed to fetch categories");
        }

        const categories = await response.json();

        res.json({
            ok: true,
            categories
        });
    } catch (error) {
        res.status(500).json({
            ok: false,
            message: error.message
        });
    }
});

export default router;