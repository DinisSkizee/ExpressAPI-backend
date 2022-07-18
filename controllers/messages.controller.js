const getMessages = (req, res) => {
  res.render("message", {
    title: "Messages to my Friends!",
    friend: "Elon Musk",
  });
};

const postMessages = (req, res) => {
  console.log("Updating messages...");
};

module.exports = {
  getMessages,
  postMessages,
};
