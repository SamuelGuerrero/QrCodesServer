"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const qrCodesController_1 = require("../controllers/qrCodesController");
const express_1 = require("express");
class QRRoutes {
    constructor() {
        this.router = (0, express_1.Router)();
        this.config();
    }
    config() {
        this.router.get("/:id", qrCodesController_1.QrCodesController.getQrCode);
        this.router.put("/:id", qrCodesController_1.QrCodesController.setIsScanned);
    }
}
const QRroutes = new QRRoutes();
exports.default = QRroutes.router;
