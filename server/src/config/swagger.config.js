import swaggerJSDoc from "swagger-jsdoc";
import { serve, setup } from "swagger-ui-express";

export default function swaggerConfig(app) {
  const swaggerDocument = swaggerJSDoc({
    swaggerDefinition: {
      openapi: "3.0.1",
      info: {
        title: "App Backend",
        version: "0.0.1",
      },
    },
    apis: [process.cwd() + "/src/modules/**/*.swagger.js"],
  });
  const swagger = setup(swaggerDocument, {});
  app.use("/swagger", serve, swagger);
}
