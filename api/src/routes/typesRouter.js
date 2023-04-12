const { Router } = require('express')

const typesRouter = Router();

// http://localhost:3001/types/
typesRouter.get('/',(req,res)=>{
  res.status(200).send('Esta ruta se encarga de mostrar los tipos de pokemon')
})