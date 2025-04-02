const mongodb = require('../db/connect');
const ObjectId = require('mongodb').ObjectId;

const getAll = async(req, res, next) => {
    const result = await mongodb.getDb().db().collection('contacts').find();
    result.toArray().then((lists) => {
        res.setHeader('Content-Type', 'application/json');
        res.status(200).json(lists);
    });
};

const get = async(req, res, next) => {
    const userId = new ObjectId(req.params.id);
    const result = await mongodb.getDb().db().collection('contacts').find({_id : userId});
    result.toArray().then((contacts) => {
        res.setHeader('Content-Type', 'application/json');
        res.status(200).json(contacts[0]);
    });
};

const createContact = async(req, res, next) => {
    if (!req.body) {
        res.status(500).send({
            message:
              err.message || 'Some error occurred while creating the contact.',
            });
        return;

    }
    let contact = {
        firstName: req.body.firstName,
        lastName: req.body.lastName,
        email: req.body.email,
        favoriteColor: req.body.favoriteColor,
        birthday: req.body.birthday
    };
    //console.log(req.body);
    const result = await mongodb.getDb().db().collection('contacts').insertOne(contact);
    //console.log(result);
    if (result.acknowledged) {
        res.status(204).send();
    } else {
        res.status(500).json(result.error || "An error ocurred while creating the contact");
    }
};

const updateContact = async(req, res, next) => {
    const userId = new ObjectId(req.params.id);
    if (!req.body) {
        res.status(500)
            .send('Error: Data cannot be empty');
        return;
    }
    let contact = {
        firstName: req.body.firstName,
        lastName: req.body.lastName,
        email: req.body.email,
        favoriteColor: req.body.favoriteColor,
        birthday: req.body.birthday
    };
    const result = await mongodb.getDb().db().collection('contacts').replaceOne({_id : userId}, contact);
    //console.log(result);
    if (result.modifiedCount > 0) {
        res.status(204).send();
    } else {
        res.status(500).json(result.error || "An error ocurred while updating the contact");
    }
};

const deleteContact = async(req, res, next) => {
    const userId = new ObjectId(req.params.id);
    const result = await mongodb.getDb().db().collection('contacts').deleteOne({_id : userId});
    if (result.deletedCount > 0) {
        res.status(204).send();
    } else {
        res.status(500).json(result.error || "An error ocurred while deleting the contact");
    }
};

module.exports = {
    getAll,
    get,
    createContact,
    updateContact,
    deleteContact
};