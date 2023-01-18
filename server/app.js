"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const config = require("../fruitnanny_config");
const dht_1 = require("./routes/dht");
const express = require("express");
let app = express();
app.set("view engine", "ejs");
app.set("views", "views");
app.use("/public", express.static("public"));
app.get("/", (req, res, next) => {
    res.render("index", { config });
});
app.listen(7000, () => {
    console.log("Fruitnanny app listening on port 7000!");
});
