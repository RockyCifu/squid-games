import express from "express";

import { getClientIndexPath } from "../config/getClientIndexPath.js";

const clientRouter = new express.Router();

const clientRoutes = [
  "/",
  "/squids",
  "/squids/pages/:page",
  "/404",
  "/user-sessions/new",
  "/users/new",
];
clientRouter.get(clientRoutes, (req, res) => {
  res.sendFile(getClientIndexPath());
});

export { clientRouter };
