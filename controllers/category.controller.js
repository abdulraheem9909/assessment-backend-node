const categoryService = require("../service/category.service");

exports.getAllCategories = async (req, res) => {
  const { page, pageSize } = req.query;
  try {
    const categories = await categoryService.getAllCategories(+page, +pageSize);
    res.json(categories);
  } catch (err) {
    res.status(400).json({ error: err.message });
  }
};

exports.createCategory = async (req, res) => {
  try {
    const category = await categoryService.createCategory(req.body);
    res.json({ data: category, status: "success" });
  } catch (err) {
    res.status(400).json({ error: err.message });
  }
};
exports.getAll = async (req, res) => {
  try {
    const categories = await categoryService.getAll();
    res.json(categories);
  } catch (err) {
    res.status(400).json({ error: err.message });
  }
};

exports.getCategoryById = async (req, res) => {
  try {
    const category = await categoryService.getCategoryById(req.params.id);
    res.json({ data: category, status: "success" });
  } catch (err) {
    res.status(400).json({ error: err.message });
  }
};

exports.updateCategory = async (req, res) => {
  try {
    const category = await categoryService.updateCategory(req.params.id, req.body);
    res.json({ data: category, status: "success" });
  } catch (err) {
    res.status(400).json({ error: err.message });
  }
};

exports.deleteCategory = async (req, res) => {
  try {
    const category = await categoryService.deleteCategory(req.params.id);
    res.json({ data: category, status: "success" });
  } catch (err) {
    res.status(400).json({ error: err.message });
  }
};
