class Employee {

  constructor(
    private _empName: string, 
    private _age: number, 
    private _empJob: string
  ) {}

  printEmp = (): void => {
    console.log(`${this._empName}의 나이는 ${this._age}살이고, 직업은 ${this._empJob} 입니다.`);
  }

  get empName() {
    return this._empName;
  }

  set empName(empName: string) {
    this._empName = empName;
  }
}

const employee: Employee = new Employee('kim', 20, 'student');