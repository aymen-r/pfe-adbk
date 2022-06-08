var mongoose = require('mongoose');
const schema = new mongoose.Schema(
  {
    nom: {
      type: String,
      required: true
    },
    categorie: {
      type: String,
      required: true
    },
    description: {
      type: String,
      required: true
    },
    ingredients: {
      type: String,
      required: true
    },
    taille: {
      type: String,
      // required: true
      default: 'normal'
    },
    prix: {
      type: Number,
      required: true
    },
    photos: {
      type: Array,
      // required: true
    },
    temps_de_preparatin: {
      type: Number,
      required: true,
      default: 2
    },
    en_promo: {
      type: Boolean,
      // required: true
      default: false
    },
    discount: {
      type: Number,
      default: 0
    },
    nbr_view: {
      type: Number,
      // required: true
    },
    nbr_like: {
      type: Number,
      // required: true
    },
    nbr_share: {
      type: Number,
      // required: true
    },
    nbr_sales: {
      type: Number,
      // required: true
    },
    id_resto: {
      type: String,
      required: true
    }
  },
  {
    timestamps: true
  }
);
module.exports = mongoose.model('produit', schema);