var mongoose = require('mongoose');

var schema = mongoose.Schema(
  {
    id_client: {
      type: mongoose.Schema.Types.ObjectId,
      required: true
    },
    id_restaurant: {
      type: mongoose.Schema.Types.ObjectId,
      required: true
    },
    id_livreur: {
      type: String,
      required: true
    },
    prix_totale: {
      type: Number,
      required: true
    },
    duree_estimee: {
      type: String,
      required: true
    },
    duree_reel: {
      type: String
    },
    date_de_lancemnt_de_la_commande: {

      type: Date,
      required: true,
      default: Date.now()
    },
    attente_resto: {
      type: String,
      required: true
    },
    attente_livreur: {
      type: String,
      required: true
    },
    estimation_resto: {
      type: String,
      required: true
    },
    estimation_livreur: {
      type: String,
      required: true
    },
    date_de_livraison: {
      type: Date,
      required: true,
      default: Date.now()
    }
  },
  {
    timestamps: true
  }
);
module.exports = mongoose.model('commande', schema);