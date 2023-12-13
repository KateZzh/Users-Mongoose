const { TableSkill, ObjectId } = require('../db');

async function getSkillDB() {
  return await TableSkill.find();
}

async function createSkillDB(skill) {
  await TableSkill.create(skill);

  return await TableSkill.find();
}

async function updateSkillDB(_id, skill) {
  await TableSkill.updateOne({ _id: new ObjectId(_id) }, { $set: skill });

  return await TableSkill.find();
}

async function deleteSkillDB(_id) {
  await TableSkill.deleteOne({ _id: new ObjectId(_id) });

  return (data = await TableSkill.find());
}

async function getSkillByIdDB(_id) {
  return await TableSkill.findById({ _id: new ObjectId(_id) });
}

module.exports = { getSkillDB, createSkillDB, updateSkillDB, deleteSkillDB, getSkillByIdDB };
