const mongoose = require('mongoose');
const schema = mongoose.Schema(
  {
    code_qr: {
      type: String,
    },
    nbr_view: {
      type: Number,
      default: 0
    },
    nbr_like: {
      type: Number,
      default: 0
    },
    nbr_share: {
      type: Number,
      default: 0
    },
    id_resto: {
      type: mongoose.Schema.Types.ObjectId,
      ref: 'restaurant',
      required: true
    }
  },
  {
    timestamps: true
  }
);
module.exports = mongoose.model('menu', schema);


