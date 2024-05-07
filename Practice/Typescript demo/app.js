var stdId = 1111;
var stdName = 'lee';
var age = 20;
var gender = 'male';
var course = 'typescript';
var completed = false;
var std = {
    stdId: 1231,
    stdName: 'lee',
    age: 20,
    gender: 'female',
    course: 'javascript',
    completed: true
};
var GenderType;
(function (GenderType) {
    GenderType["Male"] = "male";
    GenderType["Female"] = "female";
    GenderType["Neutral"] = "neutral";
})(GenderType || (GenderType = {}));
var MyStudent = /** @class */ (function () {
    function MyStudent() {
        this.stdId = 9123;
        this.stdName = 'park';
        this.age = 30;
        this.gender = 'male';
        this.course = 'node.js';
        this.completed = true;
    }
    MyStudent.prototype.setName = function (name) {
        //stdName = name;
    };
    MyStudent.prototype.getName = function () {
        return stdName;
    };
    return MyStudent;
}());
var myStd = new MyStudent();
console.log(myStd);
function getInfo(id) {
    return {
        stdId: id,
        stdName: 'lee',
        // age: 20,
        gender: 'female',
        course: 'javascript',
        completed: true
    };
}
function setInfo(student) {
    console.log(student);
}
setInfo(std);
function plus(a, b) {
    return a + b;
}
