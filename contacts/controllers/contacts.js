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

const post = async(req, res, next) => {
    if (!req.body) {
        res.status(500).send({
            message:
              err.message || 'Some error occurred while creating the Temple.',
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
    console.log(req.body);
    const result = await mongodb.getDb().db().collection('contacts').insertOne(contact);
    console.log(result);
    res.setHeader('Content-Type', "application/json")
        .status(200)
        .json({contactId: result.insertedId});
    return;
};

const put = async(req, res, next) => {
    return;
};

module.exports = {
    getAll,
    get,
    post,
    put
};