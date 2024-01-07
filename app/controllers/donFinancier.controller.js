// donFinancier.controller.js
const db = require("../models");
const DonFinancier = db.donFinancier;

// Ajouter un don financier
exports.addDonFinancier = async (req, res) => {
  try {
    const {
      montant,
      nomComplet,
      email,
      pays,
      telephone,
      region,
      departement,
      adresse,
      note,
      payment,
    } = req.body;

    // Validez les données ici si nécessaire

    // Créez un nouvel enregistrement de don financier
    const donFinancier = await DonFinancier.create({
      montant,
      nomComplet,
      email,
      pays,
      telephone,
      region,
      departement,
      adresse,
      note,
      payment
    });

    res.status(201).json({ statut: true, message: "Don financier enregistré avec succès." });
  } catch (error) {
    console.error(error);
    res.status(500).json({ statut: false, message: "Une erreur s'est produite lors de l'enregistrement du don financier." });
  }
};
// Calculer le montant total des dons financiers
exports.calculerMontantTotalDons = async (req, res) => {
    try {
      // Utilisez la méthode appropriée pour récupérer le montant total des dons (par exemple, sum() avec Sequelize)
      const montantTotal = await DonFinancier.sum('montant');
  
      res.status(200).json({ statut: true, montantTotal });
    } catch (error) {
      console.error(error);
      res.status(500).json({ statut: false, message: "Une erreur s'est produite lors du calcul du montant total des dons financiers." });
    }
  };
  // Récupérer les dons financiers par e-mail
exports.getDonationByEmail = async (req, res) => {
    try {
      const { email } = req.params;
  
      // Utilisez la méthode appropriée pour récupérer les dons par e-mail (par exemple, findAll() avec Sequelize)
      const donations = await DonFinancier.findAll({
        where: { email },
      });
  
      res.status(200).json({ statut: true, donations });
    } catch (error) {
      console.error(error);
      res.status(500).json({ statut: false, message: "Une erreur s'est produite lors de la récupération des dons financiers par e-mail." });
    }
  };
  