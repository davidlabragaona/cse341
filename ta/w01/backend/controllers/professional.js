
const mondodb = require('../db/connect');

const professionalData = async(req, res, next) => {
    const result = await mondodb.getDb().db().collection('professional').find();
    result.toArray().then((lists) => {
        res.setHeader('Content-Type', 'application/json');
        res.status(200).json(lists[0]);
    });
};

module.exports = {
    professionalData,
};