// calculating the area of the circle
function getAreaOfCircle(radius) {
    // Math.PI is the property of the JS inbuilt Math object that represents the value of Ï€
    /* Math.pow is a method (or function) of the JS inbuilt Math object which take two parameters
    first is the base and second is the exponent*/
    return Math.PI * Math.pow(radius, 2);
}

// calculating the circumference of a circle
function getCircumferenceOfCircle(radius) {
    return 2 * Math.PI * radius;
}

// calculating the area of a square
function getAreaOfSquare(side) {
    return Math.pow(side, 2);
}

// calculating the area of a triangle
function getAreaOfTriangle(base, height) {
    return 0.5 * base * height;
}

// declaring variables to store the value of the respective funcitons
const circleArea = getAreaOfCircle(5);
const circleCircumference = getCircumferenceOfCircle(5);
const squareArea = getAreaOfSquare(4);
const triangleArea = getAreaOfTriangle(3, 6);

// logging the result of the fucntions to the console
console.log(`Area of Circle: ${circleArea}`);
console.log(`Circumference of Circle: ${circleCircumference}`);
console.log(`Area of Square: ${squareArea}`);
console.log(`Area of Triangle: ${triangleArea}`);