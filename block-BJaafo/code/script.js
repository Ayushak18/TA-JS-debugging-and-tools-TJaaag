// function getFullName(firstName ="",lastName = ""){
//     return firstName +" " +lastName;
// }

// // Test One

// let result = getFullName('Ayush','Kamboj');

// let expected = 'Ayush Kambo';

// if(result !== expected){
//     // console.error('Test One Failed');
//     throw new Error('Test One Failed');
// }

// // Test Two

// result = getFullName('John','Snow');

// expected = 'John Sno';

// if(result !== expected){
//     console.error('Test Two Failed');
// }

function taxAmount(amount = 0, taxRate = 0) {
  return `${amount + amount * taxRate}`;
}

// Test One

let result = taxAmount(100, 10);

let expected = 1100;

if (result !== expected) {
  throw new Error("Test One Failed");
}

result = taxAmount(200, 10);

expected = `2200`;

if (result !== expected) {
  throw new Error("Test Two Failed");
}
