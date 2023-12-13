const {
  getSkillDB,
  createSkillDB,
  updateSkillDB,
  deleteSkillDB,
  getSkillByIdDB,
} = require('../repository/skill.repository');

async function getSkill() {
  return await getSkillDB();
}

async function createSkill(skill) {
  return await createSkillDB(skill);
}

async function updateSkill(_id, skill) {
  return await updateSkillDB(_id, skill);
}

async function deleteSkill(_id) {
  return await deleteSkillDB(_id);
}

async function getSkillById(_id) {
  return await getSkillByIdDB(_id);
}

module.exports = { getSkill, createSkill, updateSkill, deleteSkill, getSkillById };
