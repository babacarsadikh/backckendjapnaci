const db = require("../models");
const Donateur = db.donateur;
const Dons = db.dons;

exports.add_dons = async (req, res) => {
  try {
    // Créez d'abord un nouvel enregistrement de donateur
    // const donateur = await Donateur.create({
    //   prenom: req.body.prenom,
    //   nom: req.body.nom,
    //   email: req.body.email,
    //   pays: req.body.pays
    // });

    // // Obtenez l'ID du donnateur créé
    // const donateurId = donateur.id;

    // Créez maintenant un nouvel enregistrement de don en utilisant l'ID du donnateur
    const don = await Dons.create({
      typedons: req.body.typedons,
      libelle: req.body.libelle,
      date: req.body.date,
      montantDon: req.body.montantDon,
      donateurId: req.body.donateurId
    });

    res.status(201).send({ statut: 'true' ,  message: "Don enregistré avec succès." });
  } catch (error) {
    console.error(error);
    res.status(500).send({statut: 'false' ,  message: "Une erreur s'est produite lors de l'enregistrement du don." });
  }
};
