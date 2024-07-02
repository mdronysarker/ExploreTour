const fs = require('fs');

const tours = JSON.parse(
  fs.readFileSync(`${__dirname}/../dev-data/data/tours-simple.json`),
);

exports.getAllTours = (req, res) => {
  res.status(200).json({
    status: 'success',
    result: tours.length,
    data: {
      tours: tours,
    },
  });
};

exports.getTour = (req, res) => {
  // console.log(req.params.id);
  const tour = tours.find((el) => el.id === Number(req.params.id));
  // console.log(tour);
  if (!tour) {
    return res.status(404).json({
      status: 'fail',
      message: 'Invalid',
    });
  }

  res.status(200).json({
    status: 'success',
    data: {
      tour,
    },
  });
};

exports.checkBody = (req, res, next) => {
  const { name, price } = req.body;
  // console.log(name, price);
  if (!name || !price) {
    return res.status(400).json({
      status: 'Bad Request',
      message: 'fail',
    });
  }
  next();
};

exports.createTour = (req, res) => {
  // console.log(req.body);
  const newId = tours[tours.length - 1].id + 1;
  const newTour = Object.assign({ id: newId }, req.body);
  tours.push(newTour);
  fs.writeFile(
    `${__dirname}/../dev-data/data/tours-simple.json`,
    JSON.stringify(tours),
    (err) => {
      if (err) {
        return res.status(404).json({
          message: 'error',
        });
      }
      res.status(201).json({
        status: 'success',
        data: {
          tour: newTour,
        },
      });
    },
  );
};

exports.updateTour = (req, res) => {
  const tourId = req.params.id * 1; // Convert to number
  if (tourId > tours.length - 1) {
    return res.status(404).json({
      status: 'fail',
      message: 'Invalid ID',
    });
  }

  res.status(200).json({
    message: 'success',
    data: {
      tour: 'updated data',
    },
  });
};

exports.deleteTour = (req, res) => {
  const tourId = req.params.id * 1; // Convert to number
  if (tourId > tours.length - 1) {
    return res.status(404).json({
      status: 'fail',
      message: 'Invalid ID',
    });
  }

  res.status(204).json({
    message: 'success',
    data: null,
  });
};
