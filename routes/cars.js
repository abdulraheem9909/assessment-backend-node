const express = require("express");
const {
  getAllCars,
  createCar,
  getCarById,
  updateCar,
  deleteCar,
  CarsCount,
} = require("../controllers/cars.controller");

const router = express.Router();

router.route("/").get(getAllCars).post(createCar);
router.route("/count").get(CarsCount);
router.route("/:id").get(getCarById).patch(updateCar).delete(deleteCar);

module.exports = router;
