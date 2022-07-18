const model = require("../models/friends.model");

const postFriends = (req, res) => {
  if (!req.body.name) {
    return res.status(400).json({
      error: "Missing Friend Name",
    });
  }
  const newFriend = {
    id: model.length,
    name: req.body.name,
  };
  model.push(newFriend);

  res.json(newFriend);
};

const getFriends = (req, res) => {
  res.json(model);
};

const getFriendById = (req, res) => {
  const friendId = +req.params.friendId;
  const friend = model[friendId];

  if (friend) {
    res.status(200).json(friend);
  } else {
    res.status(404).json({
      error: "Friend does not exist",
    });
  }
};

module.exports = {
  postFriends,
  getFriends,
  getFriendById,
};
