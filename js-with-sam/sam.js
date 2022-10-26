console.log('Hey Sam');

let x = 5;
let y = 10;

console.log(x + y);

/* Core Variable Types */
// Strings
let name = 'Sam';

// Numbers
let age = 27;
    
// Booleans
let is_swag = true;

console.log('Name:', name, 'Age:', age, 'Is swag?', is_swag);

/* "Structures" to hold variables in */
// Lists / Arrays (List of variables)
let eight_ball_answers = [
    'Yes',
    'No',
    'Maybe',
    'Ask again later',
    name,
    age,
    is_swag
];

console.log(eight_ball_answers); 

// Objects (Key/Value pair)
let user = {
    name: 'Mike',
    age: 30,
    is_swag: true
};

console.log(user);

user.eight_ball_answers = eight_ball_answers;

console.log(user);


/* Functions */
// All functions take an input
// All functions produce an output

function add(x, y) {
    return x + y;
}

let sum_of_5_and_10 = add(50, 1112120);

console.log(sum_of_5_and_10);

// I want a function that takes 4 numbers, and returns the sum of the first 3 numbers, minus the last number
// 1. Identify the inputs
// 2. Define what the function is doing
// 3. Return an output
// a, b, c, d

// I'd like to call the function like this:
// add_3_minus_4(1, 2, 3, 4)

function add_3_minus_4(a, b, c, d) {
    let answer = a + b + c - d;
    return answer;
}

console.log(add_3_minus_4(1, 2, 3, 4)); // 2

console.log(add_3_minus_4(5, 6, 7, 8)); // 10

function square_number(x) {
    return x * x;
}

function cube_number(x) {
    return x * x * x;
}

function add_all_numbers(a, b, c) {
    return a + b;
}

console.log(square_number(10)); // 100

console.log(cube_number(10)); // 101

console.log(add_all_numbers(1, 2, 3)); // 3