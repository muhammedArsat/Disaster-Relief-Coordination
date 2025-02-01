const express = require('express');
const router = express.Router();
const volunteerController = require("../controller/volunteer/Volunteer");

router.post("/volunteer", volunteerController.addNewVolunteer);
router.get("/volunteer",volunteerController.getAllRegisteredVolunteer );

module.exports = router;
