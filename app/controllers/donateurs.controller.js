// controllers/donateurs.controller.js
const db = require("../models");
const Donateur = db.donateur;
const Dons = db.dons;

exports.addDonateur = async (req, res) => {
  try {
    // Créez un nouvel enregistrement de donateur
    const donateur = await Donateur.create({
      prenom: req.body.prenom,
      nom: req.body.nom,
      email: req.body.email,
      pays: req.body.pays,
      telephone: req.body.telephone,
      statutDonateur: req.body.statutDonateur
    });

    res.status(201).json({ statut: 'true', message: "Donateur enregistré avec succès." });
  } catch (error) {
    console.error(error);
    res.status(500).json({ statut: 'false', message: "Une erreur s'est produite lors de l'enregistrement du donateur." });
  }
};
//  la fonction suivante pour récupérer un donateur par son email
exports.getDonateurByEmail = async (req, res) => {
    try {
      const email = req.params.email;
  
      const donateur = await Donateur.findOne({
        where: { email: email }
      });
  
      if (donateur) {
        res.status(200).json({statut: 'true', data: donateur });
      } else {
        res.status(404).json({statut: 'false', message: "Aucun donateur trouvé avec cet e-mail." });
      }
    } catch (error) {
      console.error(error);
      res.status(500).json({ statut: 'false', message: "Une erreur s'est produite lors de la récupération du donateur." });
    }
  };
  exports.getDonByDonnateur = async (req, res) => {
    try {
      const email = req.params.email;
      const donateur = await Donateur.findOne({
        where: { email: email },
        include: [{ model: Dons, as: 'dons' }] // Utilisez l'alias 'dons' ici
    });
  
      if (!donateur) {
        return res.status(404).json({ statut: 'false', message: "Donateur non trouvé." });
      }
  
      const dons = donateur.dons; // Accéder à la liste des dons
  
      res.status(200).json({ statut: 'true', dons: dons });
    } catch (error) {
      console.error(error);
      res.status(500).json({ statut: 'false', message: "Une erreur s'est produite lors de la récupération des dons du donateur." });
    }
  };
