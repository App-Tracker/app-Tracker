const authController = {};

authController.isLoggedIn = (req, res, next) => {
  if (req.user) {
    return next();
  } else {
    res.sendStatus(401);
  }
};

module.exports = authController;
