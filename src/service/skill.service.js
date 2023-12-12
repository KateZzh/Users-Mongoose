const {
  getSkillDB,
  createSkillDB,
  updateSkillDB,
  deleteSkillDB,
  getSkillByIdDB,
} = require('../repository/skill.repository');

async function getSkill() {
  const data = await getSkillDB();
  return data;
}

async function createSkill(skill) {
  const data = await createSkillDB(skill);
  return data;
}

async function updateSkill(_id, skill) {
  const data = await updateSkillDB(_id, skill);
  return data;
}

async function deleteSkill(_id) {
  const data = await deleteSkillDB(_id);
  return data;
}

async function getSkillById(_id) {
  const data = await getSkillByIdDB(_id);
  return data;
}

module.exports = { getSkill, createSkill, updateSkill, deleteSkill, getSkillById };
