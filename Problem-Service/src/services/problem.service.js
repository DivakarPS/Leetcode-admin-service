const { sanitizeMarkdownContent } = require("../utils/index");


class ProblemService {

    constructor(problemRepository) {
        this.problemRepository = problemRepository;
    } 

    async createProblem(problemData) {
        try {
            problemData.description = sanitizeMarkdownContent(problemData.description);
            console.log("problemData after sanitization: ", problemData);
            const problem =  await this.problemRepository.createProblem(problemData);
            return problem;
        } catch (error) {
            console.log(error);
            throw error;
        }
    }
}

module.exports = ProblemService;