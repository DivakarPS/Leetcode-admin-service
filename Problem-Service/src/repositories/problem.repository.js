const logger = require('../config/logger.config');
const { Problem } = require('../models');

class ProblemRepository{
    async createProblem(problemData){
        try {
            const problem = await Problem.create({
                title: problemData.title,
                description: problemData.description,
                testCases: problemData.testCases ? problemData.testCases : [],
                codeStubs: problemData.codeStubs ? problemData.codeStubs : [],
            });
            logger.info(`this is logger for creating problem:${problem}`);
            return problem;
        } catch (error) {
            console.log(error);
            throw error;
        }
    }

}

module.exports = ProblemRepository;