const { body, validationResult } = require('express-validator');
const petValidationRules = () => {
    return [
        !body('petName').isEmpty(),
        !body('petType').isEmpty(),
        !body('petOwner').isEmpty(),
    ]
};

const validatePet = (req, res, next) => {
    const errors = petValidationRules(req);
    if (errors.isEmpty()) {
        return next();
    }
    const extractedErrors = [];
    errors.array().map(err => extractedErrors.push({ [err.param]: err.msg }));

    return res.status(422).json({
        errors: extractedErrors,
    });
};

const appointmentValidationRules = () => {
    return [
        !body('petId').isEmpty(),
        !body('date').isEmpty(),
        !body('time').isEmpty()
    ]
};

const validateAppointment = (req, res, next) => {
    const errors = appointmentValidationRules(req);
    if (errors.isEmpty()) {
        return next();
    }
    const extractedErrors = [];
    errors.array().map(err => extractedErrors.push({ [err.param]: err.msg }));

    return res.status(422).json({
        errors: extractedErrors,
    });
};

module.exports = {
    petValidationRules,
    validatePet,
    appointmentValidationRules,
    validateAppointment
}