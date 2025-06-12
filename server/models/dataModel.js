const mongoose = require("mongoose")
const slugify = require("slugify")
const validator = require("validator")





const dataSchema = new mongoose.Schema({
    title: {
        type: String,
        required: [true, "Entry title must be specified"],
        unique: true,
        trim: true,
        maxlength: [40, "An entry title must have less or equal than 40 characters!"],
        minlength: [5, "An entry title must be 5 or more characters long!"],
    },
    dataBody: {
        type: String,
        required: [true, "Entry must have a body"],
        unique: true,
        maxlength: [500, "Entry too long, must be 500 max or less!"]
    },
    createdAt: {
        type: Date,
        default: Date.now()
        
    },
    images: {
        type: [String],
        required: [true, "An entry needs at least one image added!"]
    }
})


const Data = mongoose.model("Data", dataSchema)




module.exports = Data;