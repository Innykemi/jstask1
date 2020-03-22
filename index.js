const myName = "Oluwakemi Raimi";
let myCourses = ["HTML", "CSS", "JS", "PHP"];console.log("Hi! My name is: " + myName);
console.log("These are my courses: " + myCourses);

const numbers = [];
if (myCourses.length % 2 === 0) {
  for (i = 1; i <= 200; i++) {
    if(i % 2 === 0) {
      numbers.push(i);
    }
  }
}
else {
  for (i = 1; i <= 200; i++) {
    if(i % 2 !== 0) {
      numbers.push(i);
    }
  }
}
console.log("Here are the numbers as requested: " + numbers);