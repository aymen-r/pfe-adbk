const mongoose = require('mongoose');
const Schema = mongoose.Schema;
const schema = new Schema(
    {
        id_produit: {
            type: mongoose.Schema.Types.ObjectId,
            ref: 'produit',
            required: true
        },
        id_menu: {
            type: mongoose.Schema.Types.ObjectId,
            ref: 'menu',
            required: true
        },
        etat: {
            type: Boolean,
            default: true
        }
    },
    {
        timestamps: true
    }
);
module.exports = mongoose.model('menuProduit', schema);