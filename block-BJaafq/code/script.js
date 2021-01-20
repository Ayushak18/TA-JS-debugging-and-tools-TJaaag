// function One

function add(numA,numB){
    return numA+numB;
}

// Function Two

function subtract(numA,numB){
    return numA - numB;
}

// Test Framework

function test(message,callback){
    try {
        callback();
        console.log('|||||||Passed|||||||',message);
    } catch (error) {
        console.error(error);
        console.log('******Failed******',message);
    }
}

// Assertion

function expect(actual){
    return {
        toEqual:function(expected){
            if(actual !== expected){
                throw new Error(`${actual} is not equal to ${expected}`);
            }
        }
    }
}

// Test function 1 

function testAdd(){
    result = add(4,4);
    expected = 8;
    expect(result).toEqual(expected);
}

// Test One
test('Adding 4 and 4',testAdd);


// Test Two 
test('Adding 5 and 15',() =>{
    expect(add(5,10)).toEqual(15);
});

// Test Three
test('Adding 15 and 15',() =>{
    expect(add(15,15)).toEqual(30);
});

// Test four
test('Adding 5 and 15',() =>{
    expect(add(5,10)).toEqual(15);
});

// Test Five
test('Adding 5 and 15',() =>{
    expect(add(5,10)).toEqual(15);
});

// Test function Two

function testSub(){
    result = subtract(4,4);
    expected = 0;
    expect(result).toEqual(expected);
}

// Test One 

test('Subtracting 4 and 4',testSub);

// Test Two 
test('Subtracting 24 and 4',() => {
    expect(subtract(24,4)).toEqual(20);
});

// Test Three
test('Subtracting 24 and 0',() => {
    expect(subtract(24,0)).toEqual(24);
});

// Test Four
test('Subtracting 100 and 4',() => {
    expect(subtract(100,4)).toEqual(96);
});

// Test Five
test('Subtracting 241 and 4',() => {
    expect(subtract(241,4)).toEqual(20);
});