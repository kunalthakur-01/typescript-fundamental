// primitive types
// number, string, boolean

let age: number;
age = 20;

let userName: string = 'kunal';

let isLogin: boolean = false;

// reference types
// arrays, objects

// arrays declaration
let hoobies: string[];

hoobies = ['cooking', 'playing', 'studying'];


// objects declaration
let person1: {
    name: string;
    age: number;
};

person1 = {
    name: 'kunal',
    age: 20
};

let person2: {
    name: string;
    age: number;
}[];



// type inference
let x = 25;
// x = 'kunal';



// union types
let y: string | number | boolean = 35;

y = true;

let z: string | string[];

z = 'kunal';
z = ['k', 'u', 'n', 'a', 'l'];


// type aliases
type Person = {
    name: string;
    age: number;
};

let person3: Person;
person3 = {
    name: 'sahil',
    age: 20
}

let person4: Person[];
person4 = [
    {
        name: 'sahil',
        age: 20
    },
    {
        name: 'sahil',
        age: 20
    }
];


// function types
function add (a: number, b: string): string | number {
    return a + b;
}

add(2, 'k');

