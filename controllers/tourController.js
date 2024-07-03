const Tour = require('../models/tourModel');

exports.getAllTours = (req, res) => {
  res.status(200).json({
    status: 'success',
  });
};

exports.getTour = (req, res) => {
  res.status(200).json({
    status: 'success',
  });
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
