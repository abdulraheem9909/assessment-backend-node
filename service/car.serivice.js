const CarModel = require("../models/cars");

exports.getAllCars = async (page = 0, pageSize = 10) => {
  const skip = page * pageSize;

  const [data, totalCount] = await Promise.all([
    CarModel.find().skip(skip).limit(pageSize),
    CarModel.countDocuments(),
  ]);

  return { totalCount, data };
};

exports.createCar = async (car) => {
  return await CarModel.create(car);
};
exports.getCarById = async (id) => {
  const isExist = await findById(id);
  if (!isExist) {
    throw new Error("Car Not Found");
  }
  return await CarModel.findById(id);
};

exports.updateCar = async (id, car) => {
  const isExist = await findById(id);
  if (!isExist) {
    throw new Error("Car Not Found");
  }
  return await CarModel.findByIdAndUpdate(id, car);
};

exports.deleteCar = async (id) => {
  const isExist = await findById(id);
  if (!isExist) {
    throw new Error("Car Not Found");
  }
  return await CarModel.findByIdAndDelete(id);
};

// Find by ID
async function findById(id) {
  return await CarModel.findById(id);
}

// Find by Category
exports.findByCategory = async (cat) => {
  return await CarModel.findOne({ category: cat });
};

// Get all cars count
exports.getAllCarsCount = async () => {
  return await CarModel.countDocuments({});
};
