const mongoose = require('mongoose');

const VolunteerSchema = new mongoose.Schema({
    name:String,
    age:String,
    role:String,
    skill:String,
    vehicle:String,
    phone:String,
    gender:String,
    createdAt:Date
})

const VolunteerModal = mongoose.model('volunteer',VolunteerSchema);
module.exports = VolunteerModal;
