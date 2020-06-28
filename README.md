# Workout Tracker

## Motivation

This application utilizes MongoDB, Express, and Node to create a simple fitness or workout tracker. When the user loads the page, they are given the option to create a new workout, continue with their last workout, or view stats for past workouts.

## Usage

Fitness Tracker is live [here](#).

## Screenshot

![fitness-tracker](https://user-images.githubusercontent.com/4752937/85959825-fca42600-b95b-11ea-8b1a-062102184936.png)

## Tech Used

[Express](https://expressjs.com/)\
[MongoDB](https://www.mongodb.com/)\
[Mongoose](https://mongoosejs.com/docs/)\
[morgan](https://www.npmjs.com/package/morgan)

## Code Examples

The provided codebase required a totalDuration property be added to a workout object. There are probably several approaches to accomplish this, but this is the one I used:

```js
workoutSchema.virtual("totalDuration").get(function () {
  let total = 0;
  this.exercises.forEach(function (e) {
    total += e.duration;
  });

  return total;
});
```

## Contributing

Pull requests are welcome. For major changes, please open an issue first to discuss what you would like to change.

## Roadmap

Exercise names should have more complex validation, or some approach to maintain clean data and ensure duplicate exercises are not added, e.g. bench and bench press.

## License

MIT © [nabeek](https://github.com/nabeek)
