interface IdNotConvertableError extends TypeError {
  name: string
}

interface IdNotConvertableErrorConstructor extends TypeErrorConstructor {
    new (message?: string, name?: string): IdNotConvertableError;
    (message?: string, name?: string): IdNotConvertableError;
    readonly prototype: IdNotConvertableError;
}

declare var IdNotConvertableError: IdNotConvertableErrorConstructor;