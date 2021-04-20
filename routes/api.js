const router = require("express").Router();
const express = require("express");
const Workout = require("../models/workout");

router.get("/api/workouts", async (req, res) => {
    try {
        console.log("We are getting workouts");
        const workouts = await Workout.find();
        res.json(workouts);
    } catch (err) {
        res.status(500);
        console.log("Error in the workouts get route: ", err);
        res.send("Unexpected error")
    }
});

router.get("/api/workouts/range", async (req, res) => {
    try {
        console.log("We are getting workouts");
        const workouts = await Workout.find();
        res.json(workouts);
    } catch (err) {
        res.status(500);
        console.log("Error in the workouts get route: ", err);
        res.send("Unexpected error")
    }
});

router.post("/api/workouts", async (req, res) => {
    try {
        const newWorkout = await Workout.create(req.body);
        res.json(newWorkout);
    } catch (err) {
        res.status(400);
        console.log("Error in the workouts post route: ", err);
        res.send("Unexpected error")
    }
});

router.put("/api/workouts/:id", async (req, res) => {
    try {
        await Workout.findOneAndUpdate(
            {_id: req.params.id},
            {$push: {exercises:body} },
            {new: true}
        );
        .then(data => {
            res.json(data)
        })
    } catch (err) {
        res.status(400);
        console.log("Error in the workouts put route: ", err)
        res.send("Unexpected error");
    }
});


module.exports = router;