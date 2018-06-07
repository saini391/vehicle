var Vehicle = require('../models/vehicle');

exports.index = function(req, res) {
    res.send('NOT IMPLEMENTED: Site Home Page');
};

// Handle book create on POST.
exports.vehicle_create_post = function(req, res) {
    var vehicleName = req.body.vehicleName;
    var vehicleNumber = req.body.vehicleNumber;
    var vehicleType = req.body.vehicleType;

    var vehicle = new Vehicle({
        vehicleName: vehicleName,
        vehicleNumber: vehicleNumber,
        vehicleType: vehicleType
    });

    vehicle.save(function (err) {
        if (err) {
            res.status(400).send({ message: "Not Inserted" });
        } else {
            res.status(200).send({ message: "Successfully Inserted" });
        }
    });
};

