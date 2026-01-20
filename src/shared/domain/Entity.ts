// src/shared/domain/entity.ts

export abstract class Entity<T> {
  // 1. Campo privado para el ID
  // usa 'protected readonly' para que las clases hijas puedan accederlo
  protected readonly _id: T;
  // 2. Constructor que recibe el ID
  constructor(id: T) {
    if (id === null || id === undefined) {
      throw new Error('Entity ID cannot be null or undefined');
    }
    this._id = id;
  }

  // 3. Getter público para el ID
  get id(): T {
    return this._id;
  }

  // 4. Método equals para comparar entidades por su ID
  public equals(object?: Entity<T>): boolean {
    if (object === null || object === undefined) {
      return false;
    }
    if (this === object) {
      return true;
    }
    if (this.constructor !== object.constructor) {
      return false;
    }
    return this._id === object._id;
  }
}
