const { TableUser, ObjectId } = require('../db');

async function getUserDB() {
  return await TableUser.find();
}

async function createUserDB(user) {
  await TableUser.create(user);

  return await TableUser.find();
}

async function updateUserDB(_id, user) {
  await TableUser.updateOne({ _id: new ObjectId(_id) }, { $set: user });

  return await TableUser.find();
}

async function deleteUserDB(_id) {
  await TableUser.deleteOne({ _id: new ObjectId(_id) });

  return await TableUser.find();
}

async function getUserByIdDB(_id) {
  return await TableUser.findById({ _id: new ObjectId(_id) });
}

module.exports = { getUserDB, createUserDB, updateUserDB, deleteUserDB, getUserByIdDB };
