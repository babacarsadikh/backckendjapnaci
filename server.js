const express = require("express");
const cors = require("cors");
const cookieSession = require("cookie-session");
const nodemailer = require('nodemailer'); 

const app = express();

app.use(cors());
/* for Angular Client (withCredentials) */
// app.use(
//   cors({
//     credentials: true,
//     origin: ["http://localhost:8081"],
//   })
// );

// parse requests of content-type - application/json
app.use(express.json());

// parse requests of content-type - application/x-www-form-urlencoded
app.use(express.urlencoded({ extended: true }));

app.use(
  cookieSession({
    name: "bezkoder-session",
    keys: ["COOKIE_SECRET"], // should use as secret environment variable
    httpOnly: true,
    sameSite: 'strict'
  })
);
// database
const db = require("./app/models");
const Role = db.role;

db.sequelize.sync();
// Configuration du transporteur Nodemailer
const transporter = nodemailer.createTransport({
  service: 'gmail',
  auth: {
    user: 'fambayegaye@gmail.com',
    pass: 'thiatouyayam'
  }
});
// Gestion de la route pour l'envoi d'e-mails
app.post('/send-email', (req, res) => {
  const { to, subject, text } = req.body;

  const mailOptions = {
    from: 'fambayegaye@gmail.com',
    to: to,
    subject: subject,
    text: text
  };

  transporter.sendMail(mailOptions, (error, info) => {
    if (error) {
      console.error(error);
      return res.status(500).send('Erreur lors de l\'envoi de l\'e-mail');
    } else {
      console.log('E-mail envoyé : ' + info.response);
      return res.status(200).send('E-mail envoyé avec succès');
    }
  });
});

// force: true will drop the table if it already exists
// db.sequelize.sync({force: true}).then(() => {
//   console.log('Drop and Resync Database with { force: true }');
//   initial();
// });

// simple route
app.get("/", (req, res) => {
  res.json({ message: "Welcome to japnaci application." });
});

// routes
require("./app/routes/auth.routes")(app);
require("./app/routes/user.routes")(app);
require('./app/routes/donnateur.routes')(app)
require("./app/routes/dons.routes")(app);
require('./app/routes/donFinancier.routes')(app)


// set port, listen for requests
const PORT = process.env.PORT || 8080;
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}.`);
});

function initial() {
  Role.create({
    id: 1,
    name: "user",
  });

  Role.create({
    id: 2,
    name: "moderator",
  });

  Role.create({
    id: 3,
    name: "admin",
  });
}
