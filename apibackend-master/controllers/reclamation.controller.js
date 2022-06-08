const reclamation = require('../models/reclamation.model');


exports.getReclamations = (req, res) => {
    reclamation.find({}, (err, reclamations) => {
        if (err) {
            res.status(500).send(err);
        }
        res.json(reclamations);
    });
};


// create and save a new reclamation
exports.createReclamation = (req, res) => {
    // Validate request
    if (!req.body) {
        res.status(400).send({
            message: "Content can not be empty!"
        });
    }

    // Create a reclamation
    const a = new reclamation({
        id_client: req.body.id_client,
        message: req.body.message
    });

    // Save reclamation in the database
    a.save()
        .then(data => {
            res.send(data);
        }).catch(err => {
            res.status(500).send({
                message: err.message || "Some error occurred while creating the reclamation."
            });
        });
};

// get all by id_client
exports.getReclamationsByIdClient = (req, res) => {
    reclamation.find({ id_client: req.params.id_client }, (err, reclamations) => {
        if (err) {
            res.status(500).send(err);
        }
        res.json(reclamations);
    });
};


exports.deleteReclamation = (req, res) => {
    reclamation.findByIdAndRemove(req.params.id, (err, reclamation) => {
        if (err) {
            res.status(500).send(err);
        }
        res.send({ message: "reclamation successfully deleted :" + reclamation.id });
    });
};
