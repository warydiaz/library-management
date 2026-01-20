// src/shared/domain/aggregate-root.ts

import { Entity } from './Entity';
import { DomainEvent } from './domain-event';

export abstract class AggregateRoot<T> extends Entity<T> {
  // 1. Array de eventos de dominio
  private _domainEvents: DomainEvent[] = [];
  // 2. Getter para acceder a los eventos
  get domainEvents(): DomainEvent[] {
    return this._domainEvents;
  }

  // 3. Método protegido para agregar eventos
  protected addDomainEvent(domainEvent: DomainEvent): void {
    this._domainEvents.push(domainEvent);
  }

  // 4. Método público para limpiar eventos
  public clearDomainEvents(): void {
    this._domainEvents = [];
  }
}
