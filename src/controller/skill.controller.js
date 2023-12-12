const express = require('express');
const {
  getSkill,
  createSkill,
  updateSkill,
  deleteSkill,
  getSkillById,
} = require('../service/skill.service');

const route = express.Router();

route.get('/', async (req, res) => {
  try {
    const data = await getSkill();
    res.status(200).send(data);
  } catch (error) {
    res.status(404).send(error.message);
  }
});

route.post('/', async (req, res) => {
  try {
    const data = await createSkill(req.body);
    res.status(200).send(data);
  } catch (error) {
    res.status(404).send(error.message);
  }
});

route.put('/:_id', async (req, res) => {
  try {
    const data = await updateSkill(req.params._id, req.body);
    res.status(200).send(data);
  } catch (error) {
    res.status(404).send(error.message);
  }
});

route.delete('/:_id', async (req, res) => {
  try {
    const data = await deleteSkill(req.params._id);
    res.status(200).send(data);
  } catch (error) {
    res.status(404).send(error.message);
  }
});

route.get('/:_id', async (req, res) => {
  try {
    const data = await getSkillById(req.params._id);
    res.status(200).send(data);
  } catch (error) {
    res.status(404).send(error.message);
  }
});

module.exports = route;
