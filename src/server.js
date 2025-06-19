require("dotenv").config();
const mongoose = require("mongoose");
const app = require("./app");

const PORT = process.env.PORT || 3000;
const MONGO_URI = process.env.MONGO_URI || "<connection_string>";

mongoose
  .connect(MONGO_URI, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  })
  .then(() => {
    console.log("MongoDB connecté");
    app.listen(PORT, () => {
      console.log(`Serveur lancé sur http://localhost:${PORT}`);
    });
  })
  .catch((err) => {
    console.error("Erreur connexion MongoDB:", err);
    process.exit(1);
  });
if (process.env.NODE_ENV !== "test") {
  app.listen(PORT, () => {
    console.log(`Serveur lancé sur http://localhost:${PORT}`);
  });
}
