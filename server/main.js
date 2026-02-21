import express from "express";
import { config } from "dotenv";
import { ErrorHandler, NotFoundHandler } from "./src/common/utils/error.handler.js";
import AllRoutes from "./src/modules/index.routes.js";
import initDatabase from "./src/modules/model.js";
import sequelize from "./src/config/sequelize.config.js";
import swaggerConfig from "./src/config/swagger.config.js";

config();
const PORT = process.env.PORT || 5001;
async function main() {
  const app = express();
  await initDatabase();

  sequelize
    .authenticate()
    .then(() => console.log("connected to DB"))
    .catch((err) => console.log(err.message));

  app.use(express.json());
  app.use(express.urlencoded({ extended: true }));

  app.use(AllRoutes);
  swaggerConfig(app);

  app.use(ErrorHandler);
  app.use(NotFoundHandler);

  app.listen(PORT, () => console.log(`live on http://localhost:${PORT}`));
}

main();
