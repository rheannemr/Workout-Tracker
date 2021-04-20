const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const WorkoutSchema = new Schema({
    day: {
        type: Date,
        default: () => new Date()
    },

    exercises: [
        {
            type: {
                type: String,
                trim: true,
                required: "Exercise Type",
            },
            name: {
                type: String,
                trim: true,
                required: "Exercise Name"
            },
            duration: {
                type: Number,
                trim: true,
                required: "Duration of exercise in minutes"
            },
            sets: {
                type: Number
            },
            reps: {
                type: Number
            },
            weight: {
                type: Number
            },
            distance: {
                type: Number
            }
        }],
    totalDuration: {
        type: Number
    }
});

const Workout = mongoose.model("Workout", WorkoutSchema);

module.exports = Workout;