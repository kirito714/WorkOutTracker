const router = require("express").Router();
const workout = require("../models/workOut.js");

router.post("/api/workouts", ({ body }, res) => {
  workout
    .create(body)
    .then((dbWorkOut) => {
      res.json(dbWorkOut);
    })
    .catch((err) => {
      res.status(400).json(err);
    });
});

module.exports = router;
