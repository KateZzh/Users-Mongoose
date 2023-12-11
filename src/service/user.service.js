const {
  getUserDB,
  createUserDB,
  updateUserDB,
  deleteUserDB,
} = require('../repository/user.repository');

async function getUser() {
  const data = await getUserDB();
  return data;
}

async function createUser(user) {
  const data = createUserDB(user);
  return data;
}

async function updateUser(_id, user) {
  const data = updateUserDB(_id, user);
  return data;
}

async function deleteUser(_id) {
  const data = deleteUserDB(_id);
  return data;
}

module.exports = { getUser, createUser, updateUser, deleteUser };
