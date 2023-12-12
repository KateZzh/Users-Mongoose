const { TableSkill, ObjectId } = require('../db');

async function getSkillDB() {
  const data = await TableSkill.find();
  return data;
}

async function createSkillDB(skill) {
  await TableSkill.create(skill);

  const data = await TableSkill.find();
  return data;
}

async function updateSkillDB(_id, skill) {
  await TableSkill.updateOne({ _id: new ObjectId(_id) }, { $set: skill });

  const data = await TableSkill.find();
  return data;
}

async function deleteSkillDB(_id) {
  await TableSkill.deleteOne({ _id: new ObjectId(_id) });

  const data = await TableSkill.find();
  return data;
}

async function getSkillByIdDB(_id) {
  const data = await TableSkill.findById({ _id: new ObjectId(_id) });
  return data;
}

module.exports = { getSkillDB, createSkillDB, updateSkillDB, deleteSkillDB, getSkillByIdDB };
