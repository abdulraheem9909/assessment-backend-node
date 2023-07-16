const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const carSchema = new Schema(
  {
    _id: { type: Schema.Types.ObjectId, auto: true, required: true },
    category: { type: String, required: true },
    color: { type: String, required: true },
    model: { type: String, required: true },
    make: { type: String, required: true },
    registrationNo: { type: String, required: true },
  },
  { collection: "Car" }
);

module.exports = mongoose.model("Car", carSchema);
