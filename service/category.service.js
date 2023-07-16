const CategoryModel = require("../models/category");
const carService = require("../service/car.serivice");

exports.getAllCategories = async (page, pageSize) => {
  const skip = page * pageSize;

  const [data, totalCount] = await Promise.all([
    CategoryModel.find().skip(skip).limit(pageSize),
    CategoryModel.countDocuments(),
  ]);

  return { totalCount, data };
};

exports.getAll = async () => {
  return CategoryModel.find();
};
exports.getCategoryById = async (id) => {
    const category = await findById(id);
    if (!category) {
      throw new Error("Category Not Found");
    }
  return CategoryModel.findById(id);
};

exports.createCategory = async (createCategory) => {
  const existingCategory = await findByName(createCategory?.name);
  if (existingCategory) {
    throw new Error("Name already exists");
  }
  return CategoryModel.create(createCategory);
};

exports.updateCategory = async (id, updateCategory) => {
  const category = await findById(id);
  if (!category) {
    throw new Error("Category Not Found");
  }
  const existingCategory = await findByName(updateCategory?.name);
  if (existingCategory) {
    throw new Error("Name already exists");
  }
  return CategoryModel.findByIdAndUpdate(id, updateCategory, { new: true });
};

exports.deleteCategory = async (id) => {
  const category = await findById(id);
  if (!category) {
    throw new Error("Category Not Found");
  }
  const isUsed = await carService.findByCategory(category.name);
  if (isUsed) {
    throw new Error("Category is in use");
  }
  return CategoryModel.findByIdAndDelete(id);
};

async function findById(id) {
  return CategoryModel.findById(id);
}

async function findByName(name) {
  return CategoryModel.findOne({ name });
}
