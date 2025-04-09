const express = require("express")
const authController = require("../controllers/authController")
const dataController = require("../controllers/dataController")

// Setting up the express router
const router = express.Router();



router
    .route("/")
    .get(dataController.getAllData)
    .post(dataController.createSingleData)


router
    .route("/:id")
    .get(dataController.getSingleData)









module.exports = router;