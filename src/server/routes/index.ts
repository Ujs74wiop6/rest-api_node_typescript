import { Router } from 'express';
import { CidadesConstroller } from './../controllers';

const router = Router();

router.get('/', (_, res) => {
    return res.send('<h2>API Rest: ON</h2>'); 
});

router.post('/post/:id', (req, res) => {
    console.log(req.params);
    // return res.status(StatusCodes.OK).json(req.params);
    return res.json(req.params);
});

/* { Routes: Cidade } */
router.post('/cidades',CidadesConstroller.createValidation,CidadesConstroller.create);
router.get('/cidades',CidadesConstroller.getAllValidation,CidadesConstroller.getAll);
router.get('/cidades/:id',CidadesConstroller.getByIdValidation,CidadesConstroller.getById);
router.put('/cidades/:id',CidadesConstroller.updateByIdValidation,CidadesConstroller.updateById);
router.delete('/cidades/:id',CidadesConstroller.deleteByIdValidation,CidadesConstroller.deleteById);


export { router };