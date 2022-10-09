"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const carrInstController_1 = require("../controllers/carrInstController");
class CarrInstRoutes {
    constructor() {
        this.router = (0, express_1.Router)();
        this.config();
    }
    config() {
        this.router.get('/:idInstituto', carrInstController_1.carrInstController.carreInst);
    }
}
const carrInstRoutes = new CarrInstRoutes();
exports.default = carrInstRoutes.router;
