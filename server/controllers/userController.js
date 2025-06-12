const User = require("../models/userModel")





exports.getAllUsers = async(req, res)=>{
    try {
        const allUsers = await User.findAll()
        res.status(200).json({
            status: "Success",
            results: allUsers.length,
            data: allUsers
        })
    } catch (error) {
        res.status(404).json({
            status: "Failed",
            message: error
        })
    }
}

exports.getUser = async (req, res) => {
    try {
        const userId = req.params.id
        const singleUser = await User.findById(userId)
        res.status(200).json({
            status: "Success",
            data: singleUser
        })
    } catch (error) {
        res.status(404).json({
            status: "Failed",
            message: error
        })
    }
}