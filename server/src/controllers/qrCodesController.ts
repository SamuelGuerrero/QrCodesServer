import { Request, Response } from "express";

import pool from "../database";

class qrCodesController {
  public async getQrCode(req: Request, res: Response): Promise<void> {
    const { id } = req.params;
    const respuesta = await pool.query("SELECT * FROM `qrCode` WHERE id = ?", [
      id,
    ]);

    if (respuesta.length > 0) {
      res.json(respuesta);
      return;
    }
    res.status(200).json({ mensaje: "Qr no encontrado" });
  }

  public async setIsScanned(req: Request, res: Response): Promise<void> {
    const { id } = req.params;
    const respuesta = await pool.query("UPDATE `qrCode` SET `isScanned` = '1' WHERE `qrCode`.`id` = ?", [
      id,
    ]);

    res.json(respuesta);
  }
}
export const QrCodesController = new qrCodesController();
