const { AsyncResource } = require('async_hooks');
const VolunteerModal = require('../../modal/volunteers/VolunteerModal');
var nodemailer = require('nodemailer');

const transporter = nodemailer.createTransport({
    port: 465,
    host: 'smtp.gmail.com',
    auth: {
        user: 'muhammedarsathcn@gmail.com',
        pass: 'kasa nowh lttt mahg',
    },
    secure: true,
});

exports.testEmail = async (req, res, next) => {};

//localhost:3000/api/v1/volunteer (POST)
exports.addNewVolunteer = async (req, res, next) => {
    try {
        const {
            name,
            age,
            role,
            skill,
            vehicle,
            phone,
            gender,
            status,
            email,
            dob,
        } = req.body;
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
            password: null,
            createdAt: new Date(),
        }); 

        await newVolunteer.save();
        res.status(201).json({
            status: 'success',
            newVolunteer,
        });
    } catch (err) {
        res.status(500).json({
            status: 'success',
            message: err.message,
        });
    }
};

//localhost:3000/api/v1/volunteer (GET)
exports.getVolunteers = async (req, res, next) => {
    try {
        const action = req.query.action;

        if (action === 'APPROVED') {
            const approvedVolunteers = await VolunteerModal.find({
                status: 'APPROVED',
            });
            const length = approvedVolunteers.length;
            res.status(200).json({
                status: 'success',
                approvedVolunteers,
                length,
            });
        } else if (action === 'PENDING') {
            const pendingVolunteers = await VolunteerModal.find({
                status: 'PENDING',
            });
            const length = pendingVolunteers.length;
            res.status(200).json({
                status: 'success',
                pendingVolunteers,
                length,
            });
        } else if (action === 'REJECTED') {
            const rejectedRegistrations = await VolunteerModal.find({
                status: 'REJECTED',
            });
            const length = rejectedRegistrations.length;
            res.status(200).json({
                status: 'success',
                rejectedRegistrations,
                length,
            });
        }
    } catch (error) {
        res.status(500).json({
            status: 'Failure',
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
                status: 'success',
                message: 'The volunteer is Not Found',
            });
        }

        //generate Random Password and sent to Volunteer's Email
        if (action === 'APPROVE') {
            volunteer.status = 'APPROVED';
            let to = volunteer.email;
            let subject = 'Request Approved';
            let tempPassword = generateRandomPassword();
            volunteer.password = tempPassword;
            const mailData = {
                from: 'muhammedarsathcn@gmail.com',
                to: to,
                subject: subject,
                text: 'Something',
                html: `<b>Hey There!</b><br>Your request is verified by Authorities of RescueBridge<br> This is the password Generated for You <b>${tempPassword}</b><br>Kindly Update the Password once Logged In Successfully`,
            };

            transporter.sendMail(mailData, (error, info) => {
                if (error) {
                    return console.log(error);
                }

                res.status(200).send({
                    message: 'Mail Send',
                    message_id: info.messageId,
                });
            });
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
            status: 'Failure',
            message: 'External Server Error',
        });
    }
};


//function to Generate Random Passowrd
function generateRandomPassword() {
    const upperCase = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ';
    const lowerCase = 'abcdefghijklmnopqrstuvwxyz';
    const numbers = '1234567890';
    const allChar = upperCase + lowerCase + numbers;

    let password = '';

    password += upperCase[Math.floor(Math.random() * upperCase.length)];
    password += lowerCase[Math.floor(Math.random() * lowerCase.length)];
    password += numbers[Math.floor(Math.random() * numbers.length)];

    for (let i = 1; i <= 3; i++) {
        password += allChar[Math.floor(Math.random() * allChar.length)];
    }

    password = password
        .split('')
        .sort(() => Math.random() - 0.5)
        .join('');

    return password;
}
