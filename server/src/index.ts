import express, { Application } from "express";

import QRroutes from "./routes/qrCodesRoutes";
import cors from "cors";
import morgan from "morgan";
import swaggerDocument from "./swagger.json";
import swagger_ui_express from "swagger-ui-express";

class Server {
  public app: Application;
  constructor() {
    this.app = express();
    this.config();
    this.routes();
    this.app.use(express.static(__dirname));
    this.app.use(
      "/documentacion",
      swagger_ui_express.serve,
      swagger_ui_express.setup(swaggerDocument)
    );
  }
  config(): void {
    this.app.set("port", process.env.PORT || 3000);
    this.app.use(morgan("dev"));
    this.app.use(cors());
    this.app.use(express.json());
    this.app.use(express.urlencoded({ extended: false }));
  }
  routes(): void {
    this.app.use("/api/qrCodes", QRroutes);
  }
  start(): void {
    this.app.listen(this.app.get("port"), "0.0.0.0", () => {
      console.log("Server on port", this.app.get("port"));
    });
  }
}

const server = new Server();
server.start();
