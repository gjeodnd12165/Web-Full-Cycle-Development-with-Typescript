class myError extends Error{
  constructor(message?: string) {
    super(message);
    Object.setPrototypeOf(this, myError.prototype);
    this.name = this.constructor.name;
  }
}

const e = new myError('mine');

console.log(e instanceof Error);
console.log(e instanceof myError);
console.log(e.name);