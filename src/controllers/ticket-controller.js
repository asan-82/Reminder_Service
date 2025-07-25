const { createNotification } = require("../services/email-service");

const create = async (req, res) => {
  try {
    const response = await createNotification(req.body);
    return res.status(201).json({
      data: response,
      success: true,
      message: "Successfully registered an email reminder",
      err: {},
    });
  } catch (error) {
    console.log(error);
    return res.status(500).json({
      data: {},
      success: false,
      message: "Unable to register an email reminder",
      err: error,
    });
  }
};

module.exports = {
  create,
};
