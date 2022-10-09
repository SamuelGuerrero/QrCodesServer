"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.QrCodesController = void 0;
const database_1 = __importDefault(require("../database"));
class qrCodesController {
    getQrCode(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            const { id } = req.params;
            const respuesta = yield database_1.default.query("SELECT * FROM `qrCode` WHERE id = ?", [
                id,
            ]);
            if (respuesta.length > 0) {
                res.json(respuesta);
                return;
            }
            res.status(200).json({ mensaje: "Qr no encontrado" });
        });
    }
    setIsScanned(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            const { id } = req.params;
            const respuesta = yield database_1.default.query("UPDATE `qrCode` SET `isScanned` = '1' WHERE `qrCode`.`id` = ?", [
                id,
            ]);
            res.json(respuesta);
        });
    }
}
exports.QrCodesController = new qrCodesController();
