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
    adresse: {
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
    email: {
      type: String,
      required: true
    },
    telephone: {
      type: Number,
      required: true
    },
    photos_de_profil: {
      type: Array,
      // required: true
      default: []
    },
    photos_de_couverture: {
      type: Array,
      // required: true
      default: []
    },
    fonction: {
      type: String,
      required: true
    },
    bio: {
      type: String,
      // required: true
    },
    reseau: {
      type: Array,
      // required: true
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
      // required: true,
      default: 0
    },
    date_inscription: {
      type: Date,
      required: true,
      default: Date.now()
    }
  },
  {
    versionKey: false
  }
);

var clientModel = mongoose.model('client', schema);

module.exports = clientModel;