import express from "express";

import { v1Router } from "./v1/v1Router.js";

const apiRouter = new express.Router();

apiRouter.use("/v1", v1Router);

export { apiRouter };
