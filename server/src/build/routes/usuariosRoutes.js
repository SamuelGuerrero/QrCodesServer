"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const usuariosController_1 = require("../controllers/usuariosController");
class Usuariosroutes {
    constructor() {
        this.router = (0, express_1.Router)();
        this.config();
    }
    config() {
        this.router.get('/:correo/:password', usuariosController_1.usuariosController.existe);
        this.router.get('/', usuariosController_1.usuariosController.list);
        this.router.post('/create', usuariosController_1.usuariosController.create);
    }
}
const usuariosroutes = new Usuariosroutes();
exports.default = usuariosroutes.router;
