const mongoose = require('mongoose');

const productScoresSchema = new mongoose.Schema({
 item: {
    type: String,
    immutable: true
  },
  dandruff: {
    type: Number,
    immutable: true
  },
  aging: {
    type: Number,
    immutable: true
  },
  rosacea: {
    type: Number,
    immutable: true
  },
  acne: {
    type: Number,
    immutable: true
  },
  sensitive_skin: {
    type: Number,
    immutable: true
  },
  oily_skin: {
    type: Number,
    immutable: true
  },
  dry_skin: {
    type: Number,
    immutable: true
  },
});

module.exports = mongoose.model('product_scores', productScoresSchema);