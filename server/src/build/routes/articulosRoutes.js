"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const articulosController_1 = require("../controllers/articulosController");
class ArticulosRoutes {
    constructor() {
        this.router = (0, express_1.Router)();
        this.config();
    }
    config() {
        this.router.get('/:idProfesor/:ini/:fin', articulosController_1.articulosController.listByidProfesorIniFin);
        this.router.get('/', articulosController_1.articulosController.list);
    }
}
const articulosRoutes = new ArticulosRoutes();
exports.default = articulosRoutes.router;
