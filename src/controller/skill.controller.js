const express = require('express');
const {
  getSkill,
  createSkill,
  updateSkill,
  deleteSkill,
  getSkillById,
} = require('../service/skill.service');
const buildResponse = require('../helper/buildResponse');

const route = express.Router();

route.get('/', async (req, res) => {
  try {
    const data = await getSkill();
    buildResponse(res, 200, data);
  } catch (error) {
    buildResponse(res, 404, error.message);
  }
});

route.post('/', async (req, res) => {
  try {
    const data = await createSkill(req.body);
    buildResponse(res, 200, data);
  } catch (error) {
    buildResponse(res, 404, error.message);
  }
});

route.put('/:_id', async (req, res) => {
  try {
    const data = await updateSkill(req.params._id, req.body);
    buildResponse(res, 200, data);
  } catch (error) {
    buildResponse(res, 404, error.message);
  }
});

route.delete('/:_id', async (req, res) => {
  try {
    const data = await deleteSkill(req.params._id);
    buildResponse(res, 200, data);
  } catch (error) {
    buildResponse(res, 404, error.message);
  }
});

route.get('/:_id', async (req, res) => {
  try {
    const data = await getSkillById(req.params._id);
    buildResponse(res, 200, data);
  } catch (error) {
    buildResponse(res, 404, error.message);
  }
});

module.exports = route;
