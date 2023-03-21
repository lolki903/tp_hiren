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
exports.createAdmin = async(req, res) => {
  adminModel.create(req.body.pincode, (err, result) => {
    if (err) {
        console.log(err);
      res.status(404);
      res.json({ message: err });
    } else {
      res.status(200);
      res.json({ message: result});
    }
  });
};

// Admin authentication
exports.authenticateAdmin = async (req, res) => {
    // const pincode  = req.body.pincode;
    await adminModel.getOne(req.body.pincode, (result,err) => {
        if (err) {
            // console.log(err);
            res.status(404);
            res.json({ message: err });
          } else {
            const reso = result[0].pincode;
            const token = jwt.sign({ reso }, "my-secret-key");
            res.status(200);
            res.json({ log: "Bienvenue admin", token: token});
          }
    });

    // console.log(admin);
    // if (!admin) {
    //   return res.status(404).json({ message: "Admin not found" });
    // }
    
    // const token = jwt.sign({ id: admin.id }, process.env.JWT_SECRET, {
    //   expiresIn: process.env.JWT_EXPIRES_IN,
    // });

    // res.status(200).json({ token });
};
