const mongoose = require('mongoose');

const schema = new mongoose.Schema({
    firstname: {
        type: String,
        default: ''
    },
    lastname: {
        type: String,
        default: ''
    },
    email: {
        type: String,
        
    },
    address: {
        type: String
    },
    phone: {
        type: Number
    }
});
const employee = new mongoose.model('Employee', schema);

module.exports = employee;