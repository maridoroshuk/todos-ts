
//primitives 

let age: number;
age = 12;

let userName: string | string[];
userName = 'Maryna';

let isStudent: boolean;
isStudent = true;


//more complex


let hobbies: string[];
hobbies = ['sport', 'programming'];

type Person = {
    name: string;
    age: number;
};

let person: Person;
person = {
    name: 'Maryna',
    age: 22
}


let people: Person[]

//type inference 

let course: string | number = 'React guide';
course = 12341;


//Functions & types


function add(a:number, b: number) {
    return a + b;
}


function print(value:any) {
    console.log(value)
}

//Generics

function insertAtBeginning<T>(array: T[], value: T) {
    const newArray = [value, ...array];
    return newArray;
}

const demoArr = [1, 2, 3]
const updatedArr = insertAtBeginning(demoArr, -1);
const stringArr = insertAtBeginning(['a', 'b', 'c'], 'd')
// updatedArr[0].split('') // not ok
// stringArr[0].split('') // ok