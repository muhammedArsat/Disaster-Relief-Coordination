const express = require('express');
const router = express.Router();
const volunteerController = require('../controller/volunteer/Volunteer');

router.post('/volunteer', volunteerController.addNewVolunteer);
router.get('/volunteer', volunteerController.getVolunteers);
router.put('/volunteer/:id', volunteerController.validateRegistration);

module.exports = router;
