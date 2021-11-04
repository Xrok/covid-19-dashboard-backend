import { Request, Response, NextFunction } from "express";
import { ComunaModel } from "../models/comuna.model";

export const getComunaData = async (
  request: Request,
  response: Response,
  next: NextFunction
) => {
  const comuna = request.query.comuna as string;
  const month = request.query.month as string;
  const comunaDoc = await ComunaModel.findOne({ comuna });
  const values = comunaDoc.values
    .filter((data) => {
      return data.date.includes(month);
    })
    .map((element) => {
      return { date: element.date, quantity: element.quantity };
    });
  response.status(200).json({ values, poblacion: comunaDoc.poblacion });
};
