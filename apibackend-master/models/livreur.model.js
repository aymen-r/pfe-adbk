var mongoose = require('mongoose');
var schema = mongoose.Schema(
  {
    nom: {
      type: String,
      required: true
    },
    prenom: {
      type: String,
      required: true
    },
    date_de_naissance: {
      type: String,
      required: true
    },
    sexe: {
      type: String,
      required: true
    },
    lieu: {
      type: String,
      required: true
    },
    n_cin: {
      type: Number,
      required: true
    },
    telephone: {
      type: Number,
      required: true
    },
    matricule_fiscale: {
      type: String,
      required: true
    },
    photos: {
      type: String,
      // required: true
    },
    date_de_convention: {
      type: String,
      required: true
    },
    type_de_vehicule: {
      type: String,
      required: true
    },
    zone_de_livraison: {
      type: String,
      required: true
    },
    disponibilite: {
      type: String,
      required: true
    },
    banque: {
      type: String,
      // required: true
    },
    rib: {
      type: String,
      // required: true
    },
    credit: {
      type: Number,
      // required: true
    },
    evaluation_livreur: {
      type: Number,
      required: true,
      default: 3
    }
  },
  {
    timestamps: true
  }
);
module.exports = mongoose.model('livreur', schema);