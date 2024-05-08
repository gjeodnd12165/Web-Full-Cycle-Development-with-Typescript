const stdId: number = 1111;
const stdName: string = 'lee';
const age: number = 20;
const gender: string = 'male';
const course: string = 'typescript';
const completed: boolean = false;

const std: Student = {
  stdId: 1231,
  stdName: 'lee',
  age: 20,
  gender: 'female',
  course: 'javascript',
  completed: true
}

enum GenderType {
  Male = 'male',
  Female = 'female',
  Neutral = 'neutral'
}

interface Student {
  stdId: number,
  stdName?: string,
  age?: number,
  gender?: string,
  course?: string,
  completed?: boolean
  getName?: () => string;
  setName?: (name: string) => void;
}

class MyStudent implements Student {
  stdId: number = 9123;
  stdName?: string | undefined = 'park';
  age?: number | undefined = 30;
  gender?: string | undefined = 'male';
  course?: string | undefined = 'node.js';
  completed?: boolean | undefined = true;

  setName(name: string): void {
    //stdName = name;
  }
  getName(): string {
    return stdName;
  }
}

const myStd: Student = new MyStudent();

console.log(myStd);

function getInfo(id: number): Student {
  return {
    stdId: id,
    stdName: 'lee',
    // age: 20,
    gender: 'female',
    course: 'javascript',
    completed: true
  }
}

function setInfo(student: Student): void {
  console.log(student);
}

setInfo(std);

function plus(a: number, b: number) {
  return a + b;
}

type strOrNum = number | string;

let numStr: strOrNum = 100;

function convertToString(val: strOrNum): string {
  return val.toString();
}

let readOnlyArray: ReadonlyArray<number> = [1,2,3];

let greeting: [number, string, boolean] = [1, 'help', true];
