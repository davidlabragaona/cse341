const mongodb = require('../db/connect');
const ObjectId = require('mongodb').ObjectId;
const validator = require('../middleware/validator');

const createAppointment = async(req, res, next) => {
    try {
        let appointment = {
            petId: req.body.petId,
            date: req.body.date,
            time: req.body.time,
            veterinarian: req.body.veterinarian,
            room: req.body.room            
        };
        //console.log(req.body);
        const result = await mongodb.getDb().db().collection('appointments').insertOne(appointment);
        //console.log(result);
        if (result.acknowledged) {
            res.status(204).send();
        } else {
            res.status(400).send();
        }
    } catch (error) {
        res.status(500).json(error || "An error ocurred while creating the appointment");
    }
    
};

const listAppointments = (req, res, next) => {
    const result = mongodb.getDb().db().collection('appointments').find();
        result.toArray().then((lists) => {
            res.setHeader('Content-Type', 'application/json');
            res.status(200).json(lists);
        });
};

const getAppointment = async (req, res, next) => {
    const userId = new ObjectId(req.params.id);
        const result = await mongodb.getDb().db().collection('appointments').find({_id : userId});
        result.toArray().then((contacts) => {
            res.setHeader('Content-Type', 'application/json');
            res.status(200).json(contacts[0]);
        });
};

const updateAppointment = async(req, res, next) => {
    const userId = new ObjectId(req.params.id);
    try {
        let appointment = {
            petId: req.body.petId,
            date: req.body.date,
            time: req.body.time,
            veterinarian: req.body.veterinarian,
            room: req.body.room            
        };
        const result = await mongodb.getDb().db().collection('appointments').replaceOne({_id : userId}, appointment);
        //console.log(result);
        if (result.modifiedCount > 0) {
            res.status(204).send();
        } else {
            res.status(400).send();
        }
    } catch (error) {
        res.status(500).json(error || "An error ocurred while updating the appointment");
    }
    
    
};

const deleteAppointment = async(req, res, next) => {
    const userId = new ObjectId(req.params.id);

    try {
        const result = await mongodb.getDb().db().collection('appoinments').deleteOne({_id : userId});
        if (result.deletedCount > 0) {
            res.status(204).send();
        } else {
            res.status(400).json(result.error || "An error ocurred while deleting the appointment");
        }
    } catch (error) {
        res.status(500).json(error || "An error ocurred while deleting the appointment");
    }
    
};

module.exports = {
    createAppointment,
    listAppointments,
    getAppointment,
    updateAppointment,
    deleteAppointment
};