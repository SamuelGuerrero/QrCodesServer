import { QrCodesController } from "../controllers/qrCodesController";
import { Router } from "express";
class QRRoutes {
  public router: Router = Router();
  constructor() {
    this.config();
  }
  config(): void {
    this.router.get("/:id", QrCodesController.getQrCode);
    this.router.put("/:id", QrCodesController.setIsScanned)
  }
}
const QRroutes = new QRRoutes();
export default QRroutes.router;
