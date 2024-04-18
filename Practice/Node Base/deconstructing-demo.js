const obj1 = { field_before: "exists" };
const obj2 = { do_exist: "field found!" };
const obj3 = {};


const { field_before: field_after } = obj1;
const { doesnt_exist = "field not found"} = obj2;
const { do_exist = "field not found"} = obj2;
const { name_inside: name_outside = "name not found" } = obj3;

console.log(field_after);
console.log(doesnt_exist);
console.log(do_exist);
console.log(name_outside);