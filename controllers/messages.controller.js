const getMessages = (req, res) => {
  res.send("<ul><li>Hello Albert!</li></ul>");
};

const postMessages = (req, res) => {
  console.log("Updating Messages");
};

module.exports = {
  getMessages,
  postMessages,
};
