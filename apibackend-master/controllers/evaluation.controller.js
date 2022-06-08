const evaluationModel = require('../models/evaluation.model.js')

// Create and Save a new evaluation_commande
exports.create = async (req, res) => {
    const evaluation_commande = new evaluationModel({
        id_client: req.body.id_client,
        id_commande: req.body.id_commande,
        score_livreur: req.body.score_livreur,
        commentaire_livreur: req.body.commentaire_livreur,
        score_resto: req.body.score_resto,
        commentaire_resto: req.body.commentaire_resto
    });
    await evaluation_commande.save().then(data => {
        res.send({
            message: "Evaluation_commande created successfully!!",
            evaluation_commande: data
        });
    }).catch(err => {
        res.status(500).send({
            message: err.message || "Some error occurred while creating evaluation_commande"
        });
    });
};

exports.findAll = async (req, res) => {
    try {
        evaluationModel.find((error, data) => {
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

//Find evaluation_commande by id
exports.findOne = async (req, res) => {
    try {
        const client = await evaluationModel.findById(req.params.id);
        res.status(200).json(evaluation_commande);
    } catch (error) {
        res.status(404).json({ message: "chui la" });
    }
};

// Update a evaluation_commande by the id in the request
exports.update = async (req, res) => {
    if (!req.body) {
        res.status(400).send({
            message: "Data to update can not be empty!"
        });
    }
    const id = req.params.id;
    await evaluationModel.findByIdAndUpdate(id, req.body, { useFindAndModify: false }).then(data => {
        if (!data) {
            res.status(404).send({
                message: `Evaluation_commande not found.`
            });
        } else { res.send({ message: "Evaluation_commande updated successfully." }) }
    }).catch(err => {
        res.status(500).send({
            message: err.message
        });
    });
};

// Delete a evaluation_commande with the specified id in the request
exports.destroy = async (req, res) => {
    await evaluationModel.findByIdAndRemove(req.params.id).then(data => {
        if (!data) {
            res.status(404).send({
                message: `Evaluation_commande not found.`
            });
        } else {
            res.send({
                message: "Evaluation_commande deleted successfully!"
            });
        }
    }).catch(err => {
        res.status(500).send({
            message: err.message
        });
    });
};