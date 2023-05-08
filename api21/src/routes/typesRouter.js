const { Router } = require('express')
const getTypes = require('../handlers/typeHandler')

const typesRouter = Router();

// http://localhost:3001/types/
typesRouter.get('/',getTypes);


module.exports = typesRouter;