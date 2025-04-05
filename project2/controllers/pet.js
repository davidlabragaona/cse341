const mongodb = require('../db/connect');
const ObjectId = require('mongodb').ObjectId;

const createPet = async(req, res, next) => {
    if (!req.body) {
            res.status(500).send({
                message:
                  err.message || 'Some error occurred while creating the Pet.',
                });
            return;
    
        }
        let pet = {
            petName: req.body.petName,
            petType: req.body.petType,
            petDOB: req.body.petDOB,
            petWeight: req.body.petWeight,
            petSize: req.body.petSize,
            petColor: req.body.petColor,
            petOwner: req.body.petOwner,
            petHistory: req.body.petHistory,
        };
        //console.log(req.body);
        const result = await mongodb.getDb().db().collection('pets').insertOne(pet);
        //console.log(result);
        if (result.acknowledged) {
            res.status(204).send();
        } else {
            res.status(500).json(result.error || "An error ocurred while creating the Pet");
        }
};

const listPets = (req, res, next) => {
    const result = mongodb.getDb().db().collection('pets').find();
        result.toArray().then((lists) => {
            res.setHeader('Content-Type', 'application/json');
            res.status(200).json(lists);
        });
};

const getPet = async (req, res, next) => {
    const userId = new ObjectId(req.params.id);
        const result = await mongodb.getDb().db().collection('pets').find({_id : userId});
        result.toArray().then((contacts) => {
            res.setHeader('Content-Type', 'application/json');
            res.status(200).json(contacts[0]);
        });
};

const updatePet = async(req, res, next) => {
    const userId = new ObjectId(req.params.id);
    if (!req.body) {
        res.status(500)
            .send('Error: Data cannot be empty');
        return;
    }
    let pet = {
        petName: req.body.petName,
        petType: req.body.petType,
        petDOB: req.body.petDOB,
        petWeight: req.body.petWeight,
        petSize: req.body.petSize,
        petColor: req.body.petColor,
        petOwner: req.body.petOwner,
        petHistory: req.body.petHistory,
    };
    const result = await mongodb.getDb().db().collection('pets').replaceOne({_id : userId}, pet);
    //console.log(result);
    if (result.modifiedCount > 0) {
        res.status(204).send();
    } else {
        res.status(500).json(result.error || "An error ocurred while updating the appointment");
    }
};

const deletePet = async(req, res, next) => {
    const userId = new ObjectId(req.params.id);
    const result = await mongodb.getDb().db().collection('pets').deleteOne({_id : userId});
    if (result.deletedCount > 0) {
        res.status(204).send();
    } else {
        res.status(500).json(result.error || "An error ocurred while deleting the appointment");
    }
};

module.exports = {
    createPet,
    listPets,
    getPet,
    updatePet,
    deletePet
};