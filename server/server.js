require("dotenv").config();
const app = require("./app");
const db = require("./config");

db.connect();

const port = process.env.PORT || 4000;
app.listen(port, () => console.log("Server running on port " + port));
