const livreurModel = require('../models/livreur.model.js')

// Create and Save a new client
exports.create = async (req, res) => {
    const livreur = new livreurModel({
        nom: req.body.nom,
        prenom: req.body.prenom,
        date_de_naissance: req.body.date_de_naissance,
        sexe: req.body.sexe,
        lieu: req.body.lieu,
        n_cin: req.body.n_cin,
        telephone: req.body.telephone,
        matricule_fiscale: req.body.matricule_fiscale,
        photos: req.body.photos,
        date_de_convention: req.body.date_de_convention,
        type_de_vehicule: req.body.type_de_vehicule,
        zone_de_livraison: req.body.zone_de_livraison,
        disponibilite: req.body.disponibilite,
        banque: req.body.banque,
        rib: req.body.rib,
        credit: req.body.credit,
        evaluation_livreur: req.body.evaluation_livreur
    });

    await livreur.save().then(data => {
        res.send({
            message: "Livreur created successfully!!",
            livreur: data
        });
    }).catch(err => {
        res.status(500).send({
            message: err.message || "Some error occurred while creating livreur"
        });
    });
};
exports.findAll = async (req, res) => {
    try {
        livreurModel.find((error, data) => {
            if (error) {
                return next(error)
            } else {
                res.json(data)
            }
        })
    } catch (error) {
        res.status(404).json({ message: error.message });
    }
};

//Find livreur by id
exports.findOne = async (req, res) => {
    try {
        const livreur = await livreurModel.findById(req.params.id);
        res.status(200).json(livreur);
    } catch (error) {
        res.status(404).json({ message: "chui la" });
    }
};
// Update a livreur by the id in the request
exports.update = async (req, res) => {
    if (!req.body) {
        res.status(400).send({
            message: "Data to update can not be empty!"
        });
    }

    const id = req.params.id;

    await livreurModel.findByIdAndUpdate(id, req.body, { useFindAndModify: false }).then(data => {
        if (!data) {
            res.status(404).send({
                message: `Livreur not found.`
            });
        } else {
            res.send({ message: "Livreur updated successfully." })
        }
    }).catch(err => {
        res.status(500).send({
            message: err.message
        });
    });
};

// Delete a livreur with the specified id in the request
exports.destroy = async (req, res) => {
    await livreurModel.findByIdAndRemove(req.params.id).then(data => {
        if (!data) {
            res.status(404).send({
                message: `Livreur not found.`
            });
        } else {
            res.send({
                message: "Livreur deleted successfully!"
            });
        }
    }).catch(err => {
        res.status(500).send({
            message: err.message
        });
    });
};