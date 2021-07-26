const router = require("express").Router();
const workout = require("../models/workout.js");

router.get("/api/workouts", (req, res) => {
  workout
    .aggregate([
      { $addFields: { totalDuration: { $sum: "$exercises.duration" } } },
    ])
    .sort({ date: -1 })
    .then((dbWorkOut) => {
      res.json(dbWorkOut);
    })
    .catch((err) => {
      res.status(400).json(err);
    });
});
router.put("/api/workouts/:id", (req, res) => {
  workout
    .updateOne({ _id: req.params.id }, { $push: { exercises: req.body } })
    .then((dbWorkOut) => {
      res.json(dbWorkOut);
    })
    .catch((err) => {
      res.status(400).json(err);
    });
});
router.get("/api/workouts/range", (req, res) => {
  workout
    .aggregate([
      { $addFields: { totalDuration: { $sum: "$exercises.duration" } } },
    ])
    .sort({ date: -1 })
    .then((dbWorkOut) => {
      res.json(dbWorkOut);
    })
    .catch((err) => {
      res.status(400).json(err);
    });
});
//post
router.post("/api/workouts", ({body},res)=>{
    workout.create(body).then((dbWorkout) =>{
        res.json(dbWorkout);
    })
    .catch((err) => {
        res.status(400).json(err);
      });
})
module.exports = router;
