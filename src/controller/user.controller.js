const express = require('express');
const { getUser, createUser, updateUser, deleteUser } = require('../service/user.service');

const route = express.Router();

route.get('/', async (req, res) => {
  try {
    const data = await getUser();
    res.status(200).send(data);
  } catch (error) {
    res.status(404).send(error.message);
  }
});

route.post('/', async (req, res) => {
  try {
    const data = await createUser(req.body);
    res.status(200).send(data);
  } catch (error) {
    res.status(404).send(error.message);
  }
});

route.put('/:_id', async (req, res) => {
  try {
    const data = await updateUser(req.params._id, req.body);
    res.status(200).send(data);
  } catch (error) {
    res.status(404).send(error.message);
  }
});

route.delete('/:_id', async (req, res) => {
  try {
    const data = await deleteUser(req.params._id);
    res.status(200).send(data);
  } catch (error) {
    res.status(404).send(error.message);
  }
});

module.exports = route;
