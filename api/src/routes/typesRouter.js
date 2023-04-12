const { Router } = require('express')

const typesRouter = Router();

const typesHandler = (req,res)=>{
  res.status(200).send('Esta ruta se encarga de mostrar los tipos de pokemon')
}

// http://localhost:3001/types/
typesRouter.get('/',typesHandler);


module.exports = typesRouter;