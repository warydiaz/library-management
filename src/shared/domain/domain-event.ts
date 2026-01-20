import { v4 as uuidv4 } from 'uuid';

export abstract class DomainEvent {
  public readonly eventId: string;
  public readonly eventName: string;
  public readonly occurredOn: Date;
  public readonly aggregateId: string;

  constructor(eventName: string, aggregateId: string) {
    if (!eventName) throw new Error('Event name cannot be empty');
    if (!aggregateId) throw new Error('Aggregate ID cannot be empty');

    this.eventId = uuidv4(); // ID único del evento
    this.eventName = eventName;
    this.aggregateId = aggregateId;
    this.occurredOn = new Date();
  }

  public toJSON(): Record<string, any> {
    return {
      eventId: this.eventId,
      eventName: this.eventName,
      occurredOn: this.occurredOn.toISOString(),
      aggregateId: this.aggregateId,
    };
  }
}
