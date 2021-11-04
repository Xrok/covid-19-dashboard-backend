import { Request, Response, NextFunction } from "express";
import { MetaModel } from "../models/meta.model";

export const getMetaData = async (
  request: Request,
  response: Response,
  next: NextFunction
) => {
  const doc = await MetaModel.findOne();
  response.status(200).json({ comunas: doc.comunas, months: doc.months });
};
