interface IdNotConvertableError extends TypeError {
}

interface IdNotConvertableErrorConstructor extends TypeErrorConstructor {
    new (message?: string): IdNotConvertableError;
    (message?: string): IdNotConvertableError;
    readonly prototype: IdNotConvertableError;
}

declare var IdNotConvertableError: IdNotConvertableErrorConstructor;