var mongoose = require('mongoose');
var schema = mongoose.Schema(
  {
    id_client: {
      type: mongoose.Schema.Types.ObjectId,
      ref: 'client',
      required: true
    },
    id_commande: {
      type: mongoose.Schema.Types.ObjectId,
      ref: 'commande',
      required: true
    },
    score_livreur: {
      type: Number,
      required: true
    },
    commentaire_livreur: {
      type: String,
      required: true
    },
    score_resto: {
      type: Number,
      required: true
    },
    commentaire_resto: {
      type: String,
      required: true
    }
  },
  {
    timestamps: true
  }
);
module.exports = mongoose.model('evaluation', schema);
