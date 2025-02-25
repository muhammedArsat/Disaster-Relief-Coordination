const mongoose = require('mongoose');

const VolunteerSchema = new mongoose.Schema({
    name: String,
    age: String,
    role: String,
    skill: String,
    vehicle: String,
    phone: String,
    gender: String,
    status: String,
    createdAt: Date,
    dob:String,
    email:String,
    password:String
});

const VolunteerModal = mongoose.model('volunteer', VolunteerSchema);
module.exports = VolunteerModal;
