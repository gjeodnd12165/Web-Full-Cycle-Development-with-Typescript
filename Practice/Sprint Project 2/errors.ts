export class IdNotConvertableError extends TypeError {
  constructor (message?: string) {
    super(message);
    Object.setPrototypeOf(this, IdNotConvertableError.prototype);
    // this.name = 'IdNotConvertableError';
    this.name = this.constructor.name;
  };
}

export class UserNotFoundError extends Error {
  constructor (message?: string) {
    super(message);
    Object.setPrototypeOf(this, UserNotFoundError.prototype);
    // this.name = 'UserNotFoundError';
    this.name = this.constructor.name;
  };
}

export class PasswordEqualToPrevError extends Error {
  constructor (message?: string) {
    super(message);
    Object.setPrototypeOf(this, UserNotFoundError.prototype);
    // this.name = 'PasswordEqualToPrevError';
    this.name = this.constructor.name;
  };
}