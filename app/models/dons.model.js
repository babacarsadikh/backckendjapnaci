// dons.model.js
module.exports = (sequelize, Sequelize) => {
    const Don = sequelize.define("don", {
      typedons: {
        type: Sequelize.STRING
      },
      libelle: {
        type: Sequelize.STRING
      },
      date: {
        type: Sequelize.DATE
      },
      montantDon: {
        type: Sequelize.INTEGER
      }
    });
  
    return Don;
  };
  