const { TableUser, ObjectId } = require('../db');

async function getUserDB() {
  const data = await TableUser.find();
  return data;
}

async function createUserDB(user) {
  await TableUser.create(user);

  const data = await TableUser.find();
  return data;
}

async function updateUserDB(_id, user) {
  await TableUser.updateOne({ _id: new ObjectId(_id) }, { $set: user });

  const data = await TableUser.find();
  return data;
}

async function deleteUserDB(_id) {
  await TableUser.deleteOne({ _id: new ObjectId(_id) });

  const data = await TableUser.find();
  return data;
}

module.exports = { getUserDB, createUserDB, updateUserDB, deleteUserDB };
