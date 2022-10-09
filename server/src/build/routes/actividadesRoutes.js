"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const actividadesController_1 = require("../controllers/actividadesController");
class ActividadesRoutes {
    constructor() {
        this.router = (0, express_1.Router)();
        this.config();
    }
    config() {
        this.router.get('/:idProfesor', actividadesController_1.actividadesController.consultaProfe);
        this.router.get('/', actividadesController_1.actividadesController.list);
        this.router.post('/', actividadesController_1.actividadesController.create);
        this.router.put('/:idActividad', actividadesController_1.actividadesController.actualizar);
        this.router.delete('/:idActividad', actividadesController_1.actividadesController.eliminar);
        this.router.get('/obt/:idActividad', actividadesController_1.actividadesController.listOne);
    }
}
const actividadesRoutes = new ActividadesRoutes();
exports.default = actividadesRoutes.router;
