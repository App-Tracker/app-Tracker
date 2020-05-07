const { user } = require('../models/mongo');

const mongoController = {};

mongoController.addUser = (req, res, next) => {
  const { username } = res.locals;
  // return res.send(res.locals);
  // res.send({ username });
  // if (!res.locals.username) {
  //   return next('No user name entered');
  // }

  user.findOne({ username }, (err, results) => {
    if (err) {
      return next('Error with DB');
    }

    if (!results) {
      user.create({ username }, (err) => {
        if (err) {
          return next(err);
        }
      });
    }
  });
};

module.exports = mongoController;
