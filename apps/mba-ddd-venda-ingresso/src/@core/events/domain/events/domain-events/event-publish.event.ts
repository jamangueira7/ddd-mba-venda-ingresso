import { IDomainEvent } from 'apps/mba-ddd-venda-ingresso/src/@core/common/domain/domain-event'
import { EventId } from '../../entities/event.entity'

export class EventPublish implements IDomainEvent {
  readonly event_version: number = 1
  readonly occurred_on: Date

  readonly is_published: boolean = true

  constructor(readonly aggregate_id: EventId) {
    this.occurred_on = new Date()
  }
}