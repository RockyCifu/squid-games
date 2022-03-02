import express from "express";

import { Squid } from "../../../models/index.js";
import { nextWrapper } from "../../lib/nextWrapper.js";

const squidsRouter = new express.Router();

squidsRouter.get(
  "/",
  nextWrapper(async (req, res) => {
    const page = parseInt(req.query.page);
    const limit = parseInt(req.query.limit);

    if (isNaN(page) || page <= 0) {
      return res.status(404).send("Page not found");
    }

    const queryResult = await Squid.query().page(page - 1, limit);
    const numPages = Math.ceil(queryResult.total / limit);

    if (numPages < page) {
      return res.status(404).send("Page not found");
    }

    res.status(200).json({
      pages: numPages,
      squids: queryResult.results,
    });
  })
);

export { squidsRouter };
