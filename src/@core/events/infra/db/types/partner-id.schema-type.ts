import {PartnerId} from "../../../domain/entities/partner.entity";
import {EntityProperty, Platform, Type} from "@mikro-orm/core";

export class PartnerIdSchemaType extends Type<PartnerId, string> {
  convertToDatabaseValue(
    valueObject: PartnerId | undefined | null,
    platform: Platform,
  ): string {
    return valueObject instanceof PartnerId
      ? valueObject.value
      : (valueObject as string)
  }

  //não funciona para relacionamentos
  convertToJSValue(value: string, platform: Platform): PartnerId {
    return new PartnerId(value)
  }

  getColumnType(prop: EntityProperty, platform: Platform) {
    return 'varchar(36)'
  }
}