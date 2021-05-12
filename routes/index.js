const express = require("express");
const router = express.Router();
const fs = require("fs");
// fs.readFile("./info.json", "utf-8", (err, data) => {
//   if (err) {
//     console.log(err.message);
//     return;
//   }
//   const messagelog = JSON.parse(data);
//   router.get("/", (req, res) => {
//     res.render("index", { info: messagelog.messages });
//   });
// });

router.get("/", (req, res) => {
  fs.readFile("./info.json", "utf-8", (err, data) => {
    if (err) {
      console.log(err.message);
      return;
    }
    const messagelog = JSON.parse(data);
    res.render("index", { info: messagelog.messages });
  });
});
module.exports = router;
