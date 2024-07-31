const { StatusCodes } = require('http-status-codes');
const { ProblemService } = require('../services');
const { ProblemRepository } = require('../repositories');

const problemService = new ProblemService(new ProblemRepository());
function pingController(req, res) {
  res.status(StatusCodes.ACCEPTED).json({ msg: "ping for problem controller is up!" });
}

async function addProblem(req, res, next) {
  try{
    console.log("req.body", req.body);
    const newProblem = await problemService.createProblem(req.body);
    return res.status(StatusCodes.CREATED).json({
      success: true,
      message: "Successfully created a new problem",
      error: {},
      data: newProblem,
    });
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
