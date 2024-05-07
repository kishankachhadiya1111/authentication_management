function hasRole(roles) {
  return (req, res, next) => {
    try {
      const authUser = req.user;
      if (!authUser || !roles.includes(authUser.role)) {
        return res.status(401).json({ data: {}, message: 'You are not authorized to perform this action' });
      }
      next();
    } catch (error) {
      next(error);
    }
  };
}

module.exports = hasRole;
