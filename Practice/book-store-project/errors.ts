export class IdNotConvertableError extends TypeError {
  constructor (message?: string) {
    super(message);
    Object.setPrototypeOf(this, IdNotConvertableError.prototype);
    this.name = 'IdNotConvertableError';
  };
}

export class UserNotFoundError extends Error {
  constructor (message?: string) {
    super(message);
    Object.setPrototypeOf(this, UserNotFoundError.prototype);
    this.name = 'UserNotFoundError';
  };
}

export class PasswordEqualToPrevError extends Error {
  constructor (message?: string) {
    super(message);
    Object.setPrototypeOf(this, PasswordEqualToPrevError.prototype);
    this.name = 'PasswordEqualToPrevError';
  };
}