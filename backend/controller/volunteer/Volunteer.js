const VolunteerModal = require('../../modal/volunteers/VolunteerModal');

//localhost:3000/api/v1/volunteer (POST)
exports.addNewVolunteer = async (req, res, next) => {
    try {
        const { name, age, role, skill, vehicle, phone, gender, status,email,dob } =
            req.body;
        const newVolunteer = new VolunteerModal({
            name,
            age,
            vehicle,
            skill,
            role,
            phone,
            gender,
            status,
            email,
            dob,
            createdAt: new Date(),
        });

        await newVolunteer.save();
        res.status(201).json({
            status:"success",
            newVolunteer,
        });
    } catch (err) {
        res.status(500).json({

            status:"success",
            message: err.message });
    }
};

//localhost:3000/api/v1/volunteer (GET)
exports.getVolunteers = async (req, res, next) => {
    try {

        const action = req.query.action;

        if(action === "APPROVED"){
            const approvedVolunteers = await VolunteerModal.find({status: "APPROVED"});
            const length = approvedVolunteers.length;
            res.status(200).json({
                status:"success",
                approvedVolunteers,
                length
            });
        }
        else if(action === "PENDING"){
            const pendingVolunteers = await VolunteerModal.find({status : "PENDING"});
            const length = pendingVolunteers.length;
            res.status(200).json({
                status:"success",
                pendingVolunteers,
                length
            })
        }

        else if(action ==="REJECTED"){
            const rejectedRegistrations = await VolunteerModal.find({status:"REJECTED"});
            const length = rejectedRegistrations.length;
            res.status(200).json({
                status:"success",
                rejectedRegistrations,
                length

            })
        }

    } catch (error) {
        res.status(500).json({
            status:"Failure",
            message: 'Internal Server Error',
        });
    }
};


//localhost:3000/api/v1/volunteer( PUT)
exports.validateRegistration = async (req, res, next) => {
    try {
        const action = req.query.action;
        const volunteerId = req.params.id;

        const volunteer = await VolunteerModal.findById(volunteerId);

        if (!volunteer) {
            res.status(404).json({
                status:"success",
                message: 'The volunteer is Not Found',
            });
        }
        if (action === 'APPROVE') {
            volunteer.status = 'APPROVED';
        } else {
            volunteer.status = 'REJECTED';
        }

        await volunteer.save();
        res.status(200).json({
            message: 'success',
            volunteer,
        });
    } catch (error) {
        res.status(500).json({
            status:"Failure",
            message: 'External Server Error',
        });
    }
};
