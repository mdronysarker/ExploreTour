const Tour = require('../models/tourModel');

exports.getAllTours = async (req, res) => {
  try {
    const tours = await Tour.find();

    res.status(200).json({
      status: 'success',
      result: tours.length,
      data: {
        tours,
      },
    });
  } catch (error) {
    res.status(400).json({
      status: 'fail',
    });
  }
};

exports.getTour = async (req, res) => {
  const { id } = req.params;
  try {
    const tour = await Tour.findById(id);

    res.status(200).json({
      status: 'success',
      data: {
        tour,
      },
    });
  } catch (error) {
    res.status(400).json({
      status: 'fail',
    });
  }
};

exports.createTour = async (req, res) => {
  const { name, rating, price } = req.body;
  const tourData = {
    name: name,
    rating: rating,
    price: price,
  };

  try {
    const newTour = await Tour.create(tourData);
    res.status(200).json({
      status: 'success',
      data: {
        newTour,
      },
    });
  } catch (error) {
    res.status(400).json({
      status: 'Fail',
      meassage: 'Invalid data sent',
    });
  }
};

exports.updateTour = (req, res) => {
  res.status(200).json({
    message: 'success',
    data: {
      tour: 'updated data',
    },
  });
};

exports.deleteTour = (req, res) => {
  res.status(204).json({
    message: 'success',
    data: null,
  });
};
