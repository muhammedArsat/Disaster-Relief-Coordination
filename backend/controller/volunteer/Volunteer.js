const VolunteerModal = require('../../modal/volunteer/VolunteerModal');

//localhost:3000/api/v1/volunteer (POST)
exports.addNewVolunteer = async (req, res, next) => {
    try {
    const{name, age, role, skill, vehicle, phone, gender} = req.body;
    const newVolunteer = new VolunteerModal({
        name,age,vehicle,skill,role,phone,gender,createdAt:new Date()
    })

    await newVolunteer.save()
    res.status(201).json({message:"successfully new volunteer added", newVolunteer});
    } catch (err) {
        res.status(500).json({ message: err.message });
    }
};
