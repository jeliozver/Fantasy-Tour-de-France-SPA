module.exports = {
  error: (req, res) => {
    return res.status(404).json({
      success: false,
      message: '404 Not Found!'
    });
  }
};