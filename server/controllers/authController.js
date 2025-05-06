const crypto = require("crypto")
const { promisify } = require("util")
const User = require("../models/userModel")
const jwt = require("jsonwebtoken")
/// TO CREATE CUSTOM APP ERROR