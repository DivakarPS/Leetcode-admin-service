const { StatusCodes } = require('http-status-codes')
const  NotImplementedError = require('../errors/notImplemented.error');

function pingController(req, res) {
  res.status(StatusCodes.ACCEPTED).json({ msg: "ping for problem controller is up!" });
}

function addProblem(req, res, next) {
  try{
    throw new NotImplementedError("addProblem");
  }catch(error){
    next(error);
  }
}

function getProblem(req, res) {
  return res.json({ msg: "getProblem is up!" });
}

function getProblems(req, res) {
  return res.json({ msg: "getProblems is up!" });
}

function deleteProblem(req, res) {
  return res.json({ msg: "deleteProblem is up!" });
}

function updateProblem(req, res) {
  return res.json({ msg: "updateProblem is up!" });
}

module.exports = {
  addProblem,
  getProblem,
  getProblems,
  deleteProblem,
  updateProblem,
  pingController,
};
