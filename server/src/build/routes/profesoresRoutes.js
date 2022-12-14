"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const profesoresController_1 = require("../controllers/profesoresController");
class ProfesoresRoutes {
    constructor() {
        this.router = (0, express_1.Router)();
        this.config();
    }
    config() {
        this.router.get('/:idProfesor', profesoresController_1.profesoresController.datos);
        this.router.get('/car/:carrera', profesoresController_1.profesoresController.consultaCarrera);
        this.router.get('/', profesoresController_1.profesoresController.list);
        this.router.post('/', profesoresController_1.profesoresController.create);
        this.router.put('/:idProfesor', profesoresController_1.profesoresController.actualizar);
        this.router.delete('/:idProfesor', profesoresController_1.profesoresController.eliminar);
        this.router.get('/:correo/:password', profesoresController_1.profesoresController.existe);
    }
}
const profesoresRoutes = new ProfesoresRoutes();
exports.default = profesoresRoutes.router;
