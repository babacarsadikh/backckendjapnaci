const donFinancierController = require("../controllers/donFinancier.controller");
module.exports = function(app) {
    // Middleware pour autoriser les en-têtes CORS
    app.use(function(req, res, next) {
      res.header("Access-Control-Allow-Headers", "Origin, Content-Type, Accept");
      next();
    });
  
    // Route pour ajouter un donateur
    app.post("/api/don-financier/add_don", donFinancierController.addDonFinancier);
    app.get("/api/don-financier/getAllDon", donFinancierController.calculerMontantTotalDons);
    app.get('/api/don-financier/getDonationByEmail/:email', donFinancierController.getDonationByEmail);



  
  };
  