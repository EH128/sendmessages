const express = require("express");
const router = express.Router();
const fs = require("fs");

router.get("/", (req, res) => {
  res.render("submit");
});

router.post("/", (req, res) => {
  fs.readFile("./info.json", "utf-8", (err, data) => {
    if (err) {
      console.log(err.message);
    }
    const allMessage = JSON.parse(data);
    allMessage.messages.push({
      user: req.body.name,
      message: req.body.message,
      feeling: req.body.feeling,
    });
    fs.writeFile("./info.json", JSON.stringify(allMessage), (err) => {
      if (err) {
        console.log(err);
      }
    });
  });
  res.redirect("/");
});
module.exports = router;
