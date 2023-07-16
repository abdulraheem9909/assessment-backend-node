const carService = require("../service/car.serivice");

exports.getAllCars = async (req, res) => {
  const { page, pageSize } = req.query;
  try {
    const cars = await carService.getAllCars(+page, +pageSize);
    res.json(cars);
  } catch (err) {
    res.status(400).json({ error: err.message });
  }
};

exports.createCar = async (req, res) => {
  try {
    const car = await carService.createCar(req.body);
    res.json({ data: car, status: "success" });
  } catch (err) {
    res.status(400).json({ error: err.message });
  }
};

exports.getCarById = async (req, res) => {
  try {
    const car = await carService.getCarById(req.params.id);
    res.json({ data: car, status: "success" });
  } catch (err) {
    res.status(400).json({ error: err.message });
  }
};

exports.updateCar = async (req, res) => {
  try {
    const car = await carService.updateCar(req.params.id, req.body);
    res.json({ data: car, status: "success" });
  } catch (err) {
    res.status(400).json({ error: err.message });
  }
};

exports.deleteCar = async (req, res) => {
  try {
    const car = await carService.deleteCar(req.params.id);
    res.json({ data: car, status: "success" });
  } catch (err) {
    res.status(400).json({ error: err.message });
  }
};
exports.CarsCount = async (req, res) => {
  try {
    const car = await carService.getAllCarsCount();
    res.json(car);
  } catch (err) {
    res.status(400).json({ error: err.message });
  }
};
