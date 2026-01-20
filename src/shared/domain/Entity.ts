// src/shared/domain/entity.ts

export abstract class Entity<T> {
  // 1. Campo privado para el ID
  // usa 'protected readonly' para que las clases hijas puedan accederlo
  protected readonly _id: T;
  // 2. Constructor que recibe el ID
  constructor(id: T) {
    this._id = id;
  }

  // 3. Getter público para el ID
  get id(): T {
    return this._id;
  }
}
