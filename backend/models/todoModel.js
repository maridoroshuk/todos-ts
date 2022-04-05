const mongoose = require("mongoose")

const todoSchema = mongoose.Schema(
  {
    text: {
      type: String,
      required: [true, "Please add a text value"]
    },
    complete: {
      type: Boolean,
      default: false
    }
  }
)

module.exports = mongoose.model("Todo", todoSchema)
