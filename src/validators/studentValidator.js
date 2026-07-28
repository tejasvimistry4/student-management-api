const validateStudent = (req, res, next) => {
  const { name, email, course } = req.body;

  if (!name || name.trim() === "") {
    return res.status(400).json({
      message: "Name is required",
    });
  }

  if (!email || email.trim() === "") {
    return res.status(400).json({
      message: "Email is required",
    });
  }

  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

  if (!emailRegex.test(email)) {
    return res.status(400).json({
      message: "Invalid email format",
    });
  }

  if (!course || course.trim() === "") {
    return res.status(400).json({
      message: "Course is required",
    });
  }

  next();
};

module.exports = validateStudent;
