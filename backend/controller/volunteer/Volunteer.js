const VolunteerModal = require('../../modal/volunteer/VolunteerModal');

//localhost:3000/api/v1/volunteer (POST)
exports.addNewVolunteer = async (req, res, next) => {
    try {

        
    } catch (err) {
        res.status(500).json({ message: err.message });
    }
};
