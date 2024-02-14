const users = [
  {
    id: 1,
    name: "Sara",
    age: 20,
  },
  {
    id: 2,
    name: "John",
    age: 25,
  },
];
const getUser = (req, res) => {
  res.send(users);
};

const postUser = (req, res) => {
  const user = req.body;
  user.id = users.length + 1;
  users.push(user);

  res.json(user);
};

const deleteUser = (req, res) => {
  const userId = parseInt(req.params.id);

  const index = users.findIndex((user) => user.id === userId);

  if (index == -1) {
    return res.json({ msg: "usr not exist" });
  }
  users.splice(index, 1);
  return res.json({ msg: "user deleted successfuly!" });
};

module.exports = { getUser, postUser, deleteUser };

// FALSCH:
// module.exports = postUser;
// module.exports = deleteUser;
