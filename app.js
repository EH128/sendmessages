const express = require("express");
const app = express();
const path = require("path");

app.set("views", path.join(__dirname, "views"));
app.set("view engine", "ejs");

// app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(express.static(path.join(__dirname, "public")));

const indexRouter = require("./routes/index");
const newMessageRouter = require("./routes/new-message");

app.use("/", indexRouter);
app.use("/send", newMessageRouter);

app.listen(3000);
