const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const categorySchema = new Schema(
  {
    name: { type: String, unique: true, required: true },
  },
  { collection: "Category" }
);

module.exports = mongoose.model("Category", categorySchema);
