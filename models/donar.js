/*include the file mongoose*/
const mongoose = require('mongoose');
const { Schema } = mongoose;

const DonarSchema = new Schema({
    name: String,
    age: Number,
    blood_grp: String,
    medical_history: String,
    mobile_number: Number,
    pin_code: Number


});

//export
module.exports = mongoose.model('Donar', DonarSchema);