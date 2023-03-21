const adminModel = require("../models/adminModel");
const jwt = require("jsonwebtoken");
const bcrypt = require("bcrypt");
exports.login = (req, res) => {
  adminModel.login(req.body.pincode, (err, result) => {
    if (err) {
        console.log(err);
      res.status(404);
      res.json({ message: err });
    } else {
      res.status(200);
      res.json({ message: "Bienvenue admin" });
    }
  });
};

// Create a new admin
exports.createAdmin = (req, res) => {
  const hashedPincode = bcrypt.hashSync(req.body.pincode, 10);
  adminModel.create(hashedPincode, (err, result) => {
    if(err) return res.status(500).send('There was a problem registering the admin.')
    return res.status(200).send({ auth: true, message: result });
  });
};

// Admin authentication
exports.authenticateAdmin = async (req, res) => {
    const { pincode } = req.body.pincode;
    const admin =await adminModel.getOne(pincode, (err, result) => {
        if (err) {
            console.log(err);
            res.status(404);
            res.json({ message: err });
        } else {
            res.status(200);
            res.json({ message: result });
        }
    });
    console.log(admin);
    res.send(admin);
    // if (!admin) {
    //   return res.status(404).json({ message: "Admin not found" });
    // }

    // const token = jwt.sign({ id: admin.id }, process.env.JWT_SECRET, {
    //   expiresIn: process.env.JWT_EXPIRES_IN,
    // });

    // res.status(200).json({ token });
};
