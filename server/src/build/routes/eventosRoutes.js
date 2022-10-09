"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const eventosController_1 = require("../controllers/eventosController");
class EventosRoutes {
    constructor() {
        this.router = (0, express_1.Router)();
        this.config();
    }
    config() {
        this.router.get('/:idProfesor', eventosController_1.eventosController.consultaProfe);
        this.router.get('/', eventosController_1.eventosController.list);
        this.router.post('/', eventosController_1.eventosController.create);
        this.router.put('/:idEvento', eventosController_1.eventosController.actualizar);
        this.router.delete('/:idEvento', eventosController_1.eventosController.eliminar);
        this.router.get('/obt/:idEvento', eventosController_1.eventosController.listOne);
    }
}
const eventosRoutes = new EventosRoutes();
exports.default = eventosRoutes.router;
