const path = require("path");

const getMessages = (req, res) => {
  res.sendFile(
    path.join(__dirname, "..", "public", "images", "skimountain.jpg")
  );
};

const postMessages = (req, res) => {
  console.log("Updating Messages");
};

module.exports = {
  getMessages,
  postMessages,
};
