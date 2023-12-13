const express = require('express');
const {
  getUser,
  createUser,
  updateUser,
  deleteUser,
  getUserById,
} = require('../service/user.service');
const buildResponse = require('../helper/buildResponse');

const route = express.Router();

route.get('/', async (req, res) => {
  try {
    const data = await getUser();
    buildResponse(res, 200, data);
  } catch (error) {
    buildResponse(res, 404, error.message);
  }
});

route.post('/', async (req, res) => {
  try {
    const data = await createUser(req.body);
    buildResponse(res, 200, data);
  } catch (error) {
    buildResponse(res, 404, error.message);
  }
});

route.put('/:_id', async (req, res) => {
  try {
    const data = await updateUser(req.params._id, req.body);
    buildResponse(res, 200, data);
  } catch (error) {
    buildResponse(res, 404, error.message);
  }
});

route.delete('/:_id', async (req, res) => {
  try {
    const data = await deleteUser(req.params._id);
    buildResponse(res, 200, data);
  } catch (error) {
    buildResponse(res, 404, error.message);
  }
});

route.get('/:_id', async (req, res) => {
  try {
    const data = await getUserById(req.params._id);
    buildResponse(res, 200, data);
  } catch (error) {
    buildResponse(res, 404, error.message);
  }
});

module.exports = route;
