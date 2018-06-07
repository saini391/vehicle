var mongoose = require('mongoose');

// User Schema
var VehicleSchema = mongoose.Schema({
   
    vehicleName: {
        type: String,
        required: true
    },
    vehicleNumber: {
        type: String,
        required: true,
    },    
    vehicleType: {
        type: String,
        required: true
    }    
});

var User = module.exports = mongoose.model('Vehicle', VehicleSchema);

