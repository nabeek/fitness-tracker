const mongoose = require("mongoose");

const Schema = mongoose.Schema;

function isPositiveInteger(n) {
  return n >>> 0 === parseFloat(n);
}

const workoutSchema = new Schema(
  {
    day: {
      type: Date,
      default: Date.now,
    },
    exercises: [
      {
        type: {
          type: String,
          enum: ["resistance", "cardio"],
          required: true,
        },
        name: {
          type: String,
          trim: true,
          required: "Enter an exercise name",
        },
        duration: {
          type: Number,
          required: "Enter a duration in minutes",
          min: 1,
          max: 1000,
        },
        distance: {
          type: Number,
          min: 1,
          max: 100,
        },
        weight: {
          type: Number,
          min: 1,
          max: 1000,
        },
        sets: {
          type: Number,
          min: 1,
          max: 100,
        },
        reps: {
          type: Number,
          min: 1,
          max: 500,
        },
      },
    ],
  },
  {
    toJSON: { virtuals: true },
  }
);

workoutSchema.virtual("totalDuration").get(function () {
  let total = 0;
  this.exercises.forEach(function (e) {
    total += e.duration;
  });

  return total;
});

const Workout = mongoose.model("Workout", workoutSchema);

module.exports = Workout;
