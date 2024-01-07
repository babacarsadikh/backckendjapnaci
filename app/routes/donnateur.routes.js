const { verifySignUp } = require("../middleware");
const DonateursController = require('../controllers/donateurs.controller');

module.exports = function(app) {
  // Middleware pour autoriser les en-têtes CORS
  app.use(function(req, res, next) {
    res.header("Access-Control-Allow-Headers", "Origin, Content-Type, Accept");
    next();
  });

  // Route pour ajouter un donateur
  app.post("/api/donnateur/addDonnateur", DonateursController.addDonateur);

  // Route pour récupérer un donateur par son email
  app.get("/api/donnateur/:email", DonateursController.getDonateurByEmail);
  // recuperer les dons un donnateur
  app.get("/api/donnateur/:email/dons", DonateursController.getDonByDonnateur);

};
