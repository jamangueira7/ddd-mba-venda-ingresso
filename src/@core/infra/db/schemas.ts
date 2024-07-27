import { Partner } from "src/@core/events/domain/entities/partner.entity";
import { EntitySchema } from "@mikro-orm/core";
import { PartnerIdSchemaType } from "./types/partner-id.schema-type";

export const PartnerSchema = new EntitySchema<Partner>({
  class: Partner,
  properties: {
    id: { primary: true, customType: new PartnerIdSchemaType() },
    name: { type: 'string', length: 255}
  }  
})