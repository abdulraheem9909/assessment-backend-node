
const express = require("express");
const { getAllCategories, createCategory, getCategoryById, updateCategory, deleteCategory, getAll } = require("../controllers/category.controller");
const router = express.Router();

router.route("/").get(getAllCategories).post(createCategory);
router.route("/all").get(getAll);
router.route("/:id").get(getCategoryById).patch(updateCategory).delete(deleteCategory);

module.exports = router;