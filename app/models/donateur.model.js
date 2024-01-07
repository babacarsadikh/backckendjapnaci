// donateur.model.js
module.exports = (sequelize, Sequelize) => {
    const Donateur = sequelize.define("donateur", {
      prenom: {
        type: Sequelize.STRING
      },
      nom: {
        type: Sequelize.STRING
      },
      email: {
        type: Sequelize.STRING,
        unique: true // Assurez-vous que l'e-mail est unique
      },
      pays: {
        type: Sequelize.STRING
      },
      telephone: {
        type: Sequelize.STRING
      },
      statutDonateur: {
        type: Sequelize.STRING
      }
    });
  
    Donateur.associate = (models) => {
      Donateur.hasMany(models.Don, { as: 'dons' });
    };
  
    return Donateur;
  };
  