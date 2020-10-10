const express = require("express");
const router = express.Router();

const Package = require('../models/package');


//Add Package
router.post("", (req, res, next) => {
  const package = new Package({
    fname: req.body.fname,
    lname: req.body.lname,
    checkin: req.body.checkin,
    checkout: req.body.checkout,
    adults: req.body.adults,
    nofch: req.body.nofch,
    des: req.body.des

  });
  package.save();
  res.status(201).json({
    message: 'Package added successfully'
  });
});



//Reteive Package
router.get("", (req, res, next) => {
  Package.find()
    .then(documents => {
      res.status(200).json({
        message: 'Package fetched successfully',
        packages: documents
      });
    });
});


//Delete Coustomer
router.delete("/:id", (req, res, next) => {
  Package.deleteOne({_id: req.params.id}).then(result => {
    console.log(result);
    res.status(200).json({
      message: "Package Deleted"
    });
  });

});

module.exports = router;
