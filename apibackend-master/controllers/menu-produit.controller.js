const menuProduit = require('../models/menu-produit.model');
const mongoose = require('mongoose');

// Create and Save a new menu-produit
exports.create = async (req, res) => {

    const obj = new menuProduit({
        id_menu: req.body.id_menu,
        id_produit: req.body.id_produit,

    });

    await obj.save().then(data => {
        res.send({
            message: "Menu-Produit created successfully!!",
            menuProduit: data
        });
    }).catch(err => {
        res.status(500).send({
            message: err.message || "Some error occurred while creating menu-produit"
        });
    });
}


// Find all By id_menu
exports.findAllByMenu = async (req, res) => {
    console.log(req.params.id);
    try {
        await menuProduit.find({ id_menu: req.params.id })
            .then(data => {
                res.status(200).json(data);
            })
    } catch (error) {
        res.status(404).send(error)
        console.log(error);
    }
};

//delete By id_menu
exports.deleteAllByMenu = async (req, res) => {
    try {
        const menuProduit = await menuProduit.deleteMany({ id_menu: req.params.id_menu });
        res.status(200).json(menuProduit);
    } catch (error) {
        res.status(404).json({ message: "err while deleting all menu-produits" });
    }
};


exports.delete = async (req, res) => {
    try {
        const a = await menuProduit.findByIdAndDelete(req.params.id);
        res.status(200).json(a);
    } catch (error) {
        res.status(404).json({ message: "err while deleting menu-produit" });
        console.log(error);
    }
};