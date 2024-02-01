"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.router = void 0;
const express_1 = require("express");
const controllers_1 = require("./../controllers");
const router = (0, express_1.Router)();
exports.router = router;
router.get('/', (_, res) => {
    return res.send('<h2>API Rest: ON</h2>');
});
router.post('/post/:id', (req, res) => {
    console.log(req.params);
    // return res.status(StatusCodes.OK).json(req.params);
    return res.json(req.params);
});
/* { Routes: Cidade } */
router.post('/cidades', controllers_1.CidadesConstroller.createValidation, controllers_1.CidadesConstroller.create);
router.get('/cidades', controllers_1.CidadesConstroller.getAllValidation, controllers_1.CidadesConstroller.getAll);
router.get('/cidades/:id', controllers_1.CidadesConstroller.getByIdValidation, controllers_1.CidadesConstroller.getById);
router.put('/cidades/:id', controllers_1.CidadesConstroller.updateByIdValidation, controllers_1.CidadesConstroller.updateById);
router.delete('/cidades/:id', controllers_1.CidadesConstroller.deleteByIdValidation, controllers_1.CidadesConstroller.deleteById);
/* { Routes: Pessoa } */
router.post('/pessoas', controllers_1.PessoasController.createBodyValidator, controllers_1.PessoasController.create);
