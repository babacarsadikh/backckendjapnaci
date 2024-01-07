const config = require("../config/db.config.js");

const Sequelize = require("sequelize");
const sequelize = new Sequelize(
  config.DB,
  config.USER,
  config.PASSWORD,
  {
    host: config.HOST,
    dialect: config.dialect,
    pool: {
      max: config.pool.max,
      min: config.pool.min,
      acquire: config.pool.acquire,
      idle: config.pool.idle
    }
  }
);

const db = {};

db.Sequelize = Sequelize;
db.sequelize = sequelize;

// Importez vos modèles ici

db.user = require("../models/user.model.js")(sequelize, Sequelize);
db.role = require("../models/role.model.js")(sequelize, Sequelize);
db.dons = require("../models/dons.model.js")(sequelize, Sequelize);
db.donateur = require("../models/donateur.model.js")(sequelize, Sequelize);
db.donFinancier = require("../models/donFinancier.model.js")(sequelize, Sequelize);



db.role.belongsToMany(db.user, {
  through: "user_roles"
});
db.user.belongsToMany(db.role, {
  through: "user_roles"
});

db.ROLES = ["user", "ADMIN", "BENEVOLE", "BENEFICIAIRE"];
// Définissez vos associations ici

db.donateur.hasMany(db.dons, { as: 'dons' });
db.dons.belongsTo(db.donateur, { as: 'donateur' }); // Ajoutez l'alias 'donateur' ici


module.exports = db;
