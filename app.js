// Object Enhancements Exercise
// In this exercise, you’ll refactor some ES5 code into ES2015.
// Write your code in the sections with a comment to “Write an ES2015 Version”.

// Same keys and values
function createInstructor(firstName, lastName) {
  return {
    firstName: firstName,
    lastName: lastName,
  };
}

// Same keys and values ES2015
const createInstructor2 = (firstName, lastName) => {
  return {
    firstName,
    lastName,
  };
};

console.log(createInstructor2("Andrea", "Martz"));
