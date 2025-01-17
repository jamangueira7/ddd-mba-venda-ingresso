
import { IDomainEvent } from 'apps/mba-ddd-venda-ingresso/src/@core/common/domain/domain-event';
import { PartnerId } from '../../entities/partner.entity';

export class PartnerChangedName implements IDomainEvent {
  readonly event_version: number = 1;
  readonly occurred_on: Date;

  constructor(readonly aggregate_id: PartnerId, readonly name: string) {
    this.occurred_on = new Date();
  }
}