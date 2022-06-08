var mongoose = require('mongoose');
var schema = mongoose.Schema(
  {
    nom_resto: {
      type: String,
      required: true
    },
    nom_gerant: {
      type: String,
      required: true
    },
    matricule_fiscale: {
      type: String,
      required: true
    },
    adresse: {
      type: String,
      required: true
    },
    position_gps: {
      type: String,
      required: true
    },
    email: {
      type: String,
      required: true
    },
    telephone: {
      type: String,
      required: true
    },
    date_de_convention: {
      type: Date,
      required: true,
      default: Date.now()
    },
    photo: {
      type: String,
      // required: true
    },
    evaluation_restaurant: {
      type: Number,
      required: true,
      default: 3
    }
  },
  {
    timestamps: true
  }
);
module.exports = mongoose.model('restaurant', schema);