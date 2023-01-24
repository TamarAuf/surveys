const mongoose = require("mongoose");

const recommendationsSchema = new mongoose.Schema({
  recommendations: {
    shampoo: {
      type: String,
    },
    soap: {
      type: String,
    },
    cleanser: {
      type: String,
    },
    toner: {
      type: String,
    },
    moisterizer: {
      type: String,
    },
  },
  feedback: {
    type: String,
  },
  date: {
    type: Date,
  }, 
  response: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "response", 
    unique: true,
    required: true  
  },
});

module.exports = mongoose.model("recommendation", recommendationsSchema);
