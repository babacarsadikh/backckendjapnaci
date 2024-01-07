const { verifySignUp } = require("../middleware");
const controller = require("../controllers/auth.controller");
const AddDonsController = require('../controllers/dons.controler');

module.exports = function(app) {
  app.use(function(req, res, next) {
    res.header(
      "Access-Control-Allow-Headers",
      "Origin, Content-Type, Accept"
    );
    next();
  });



  app.post("/api/dons/addDons", AddDonsController.add_dons);

};
