import express from "express";

import { Squid } from "../../../models/index.js";
import { sanitizeSquid } from "../../../services/sanitizeSquid.js";
import { nextWrapper } from "../../lib/nextWrapper.js";

const squidsRouter = new express.Router();

squidsRouter.get(
  "/",
  nextWrapper(async (req, res) => {
    const page = parseInt(req.query.page || 1, 10);
    const limit = parseInt(req.query.limit || 10, 10);

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

squidsRouter.post(
  "/",
  nextWrapper(async (req, res) => {
    const squid = sanitizeSquid(req.body.squid);
    const newSquid = await Squid.query().insertAndFetch(squid);
    res.status(201).json({ squid: newSquid });
  })
);

squidsRouter.get(
  "/:id",
  nextWrapper(async (req, res) => {
    const squid = await Squid.query().findById(req.params.id).throwIfNotFound();
    return res.status(200).json({ squid });
  })
);

export { squidsRouter };
