const {
  getUserDB,
  createUserDB,
  updateUserDB,
  deleteUserDB,
  getUserByIdDB,
} = require('../repository/user.repository');

async function getUser() {
  return await getUserDB();
}

async function createUser(user) {
  return createUserDB(user);
}

async function updateUser(_id, user) {
  return updateUserDB(_id, user);
}

async function deleteUser(_id) {
  return deleteUserDB(_id);
}

async function getUserById(_id) {
  return await getUserByIdDB(_id);
}

module.exports = { getUser, createUser, updateUser, deleteUser, getUserById };
