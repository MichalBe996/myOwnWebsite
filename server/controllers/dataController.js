const Data = require('../models/dataModel')


exports.getAllData = async (req, res) => {


    try {
        const allGuns = await Data.find()
        res.status(200).json({
            status: "Success",
            data: allGuns
        })
    } catch (error) {
        res.status(404).json({
            status: "Fail",
            message: err
        })
        
    }

}

exports.getSingleData = async (req, res) => {

try {
    const id = req.params.id
    const singleData = await Data.findById(id)
    res.status(200).json({
        status: "Success",
        data: singleData
        
    })
} catch (error) {
    res.status(400).json({
        status: "Fail",
        message: error
    })
}
    

}
exports.createSingleData = async (req, res) => {

    try {
        const newData = await Data.create({
            ...req.body
        })
        res.status(201).json({
            status: "Success",
            message: "New entry added successfully!",
            data: newData
        })
    } catch (error) {
        res.status(400).json({
            status: "Fail",
            message: error
        })
        
    }

}


exports.deleteSingleData = async (req, res) => {
    try {
        const id = req.params.id
        await Data.findByIdAndDelete(id)
        res.status(200).json({
            status: "Success", 
            message: "Data deleted successfully!"
        })
    } catch (error) {
        res.status(404).json({
            status: "Fail",
            message: err
        })
        
    }
}