import { getModelForClass, modelOptions, prop } from "@typegoose/typegoose";
import { WhatIsIt } from "@typegoose/typegoose/lib/internal/constants";

class MetaClass {
  @prop({ type: () => [String] }, WhatIsIt.ARRAY)
  public comunas!: string[];

  @prop({ type: () => [String] }, WhatIsIt.ARRAY)
  public months!: string[];
}

export const MetaModel = getModelForClass(MetaClass, {
  schemaOptions: { collection: "meta" },
});
