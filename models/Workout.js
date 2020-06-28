const mongoose = require("mongoose");

const Schema = mongoose.Schema;

const workoutSchema = new Schema({
  day: {
    type: Date,
    default: Date.now
  },
  exercises: [
    {
      type: {
        type: String,
        enum: ["resistance", "cardio"],
        required: true
      },
      name: {
        type: String,
        required: "Enter an exercise name"
      },
      duration: {
        type: Number,
        required: "Enter a duration in minutes"
      },
      distance: {
        type: Number,
        min: 1
      },
      weight: {
        type: Number,
        min: 1
      },
      sets: {
        type: Number,
        min: 1
      },
      reps: {
        type: Number,
        min: 1
      }
    }
  ]
});

const Workout = mongoose.model("Workout", workoutSchema);

module.exports = Workout;