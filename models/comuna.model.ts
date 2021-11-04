import { getModelForClass, modelOptions, prop } from "@typegoose/typegoose";
import { WhatIsIt } from "@typegoose/typegoose/lib/internal/constants";
import { prototype } from "events";

class DayData {
  @prop({ required: false, type: () => String })
  public date?: string;

  @prop({ required: false, type: () => Number })
  public quantity?: number;
}

class ComunaClass {
  @prop({ type: () => [DayData] }, WhatIsIt.ARRAY)
  public values!: DayData[];

  @prop({ type: () => String })
  public region!: string;

  @prop({ type: () => String })
  public codigoregion!: string;

  @prop({ type: () => String })
  public comuna!: string;

  @prop({ type: () => String })
  public codigocomuna!: string;

  @prop({ type: () => Number })
  public poblacion!: number;
}
export const ComunaModel = getModelForClass(ComunaClass, {
  schemaOptions: { collection: "dp" },
});
