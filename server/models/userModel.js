const mongoose = require("mongoose")
const validator = require("validator")
const bcrypt = require("bcryptjs")
const crypto = require("crypto")



const userSchema = new mongoose.Schema({
    name: {
        type: String,
        required: [true, "Username must be provided"]
    },
    email: {
        type: String,
        required: [true, "User email must be provided"],
        unique: true, 
        lowercase: true,
        validate: [validator.isEmail, "Please provide a valid e-mail adress."]
    },
    role: {
        type: String,
        enum: ["admin", "user"],
        default: "user"
    }
})