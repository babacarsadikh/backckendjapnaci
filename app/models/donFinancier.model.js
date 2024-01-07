
// dons.model.js
module.exports = (sequelize, Sequelize) => {
    const DonFinancier = sequelize.define("DonFinancier", {
        montant: {
            type: Sequelize.INTEGER,
            allowNull: false,
        },
        nomComplet: {
            type: Sequelize.STRING,
            allowNull: false,
        },
        email: {
            type: Sequelize.STRING,
            allowNull: false,
        },
        pays: {
            type: Sequelize.STRING,
            allowNull: false,
        },
        telephone: {
            type: Sequelize.STRING,
            allowNull: true,
        },
        region: {
            type: Sequelize.STRING,
        },
        departement: {
            type: Sequelize.STRING,
        },
        adresse: {
            type: Sequelize.STRING,
        },
        note: {
            type: Sequelize.STRING,
        },
        payment: {
            type: Sequelize.STRING,
        },

    },

        {
            tableName: "don_financiers", // Nom de la table dans la base de données
            timestamps: true, // Ajoute des champs `createdAt` et `updatedAt`
        });

    return DonFinancier;
};
