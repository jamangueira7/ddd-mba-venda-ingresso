import { IDomainEvent } from 'apps/mba-ddd-venda-ingresso/src/@core/common/domain/domain-event'
import { OrderId, OrderStatus } from '../../entities/order.entity'

export class OrderPaid implements IDomainEvent {
  readonly event_version: number = 1
  readonly occurred_on: Date

  constructor(readonly aggregate_id: OrderId, readonly status: OrderStatus) {
    this.occurred_on = new Date()
  }
}