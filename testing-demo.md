Create functions.js and function.test.js files.

Run npm init -y

Run npm i --save-dev jest
 - installs jest only in our dev environment, would ignore it if you compiled or built the project. 

Change 'test' script to run jest in package.json
```
 "scripts": {
    "test": "jest"
  },
```


## Test Driven development

### First we want to write a test for a function that should take in an number and return a string stating that that number is your age. 



In the functions.test.js file write your first test. The test should expect a function called stateAge to return the string "I am 25" when invoked. 
```
const {stateAge} = require('./functions')

test('Should return I am {age}', () => {
    expect(stateAge(25)).toEqual("I am 25.")
})
```


Now in the functions.js file we need to write the function that we're testing. 
```
module.exports = {
    stateAge: (age) => {
        return `I am ${age}`
        // return `I am ${age}.`
    }
}
```
Run the tests by running npm run test. 

Intentionally insert a period in either the test or the function to show the error handling of a failed test first, then fix it and show the successful test results.


### Now we'll write a test for a function that should take in a name and an age; if the age is 21 or older we want to add the user to an imaginary database and send a confirmation, otherwise we want to return a string stating that the user is not old enough. 

In functions.test.js write the following test:
```
test('Should return user object or a failed status', ()=> {

    expect(addUser('Joey', 21)).toEqual('User created')

    expect(addUser('Chandler', 15)).toEqual('User not old enough')
})
```

Then in functions.js write the actual function. Intentionally mess up the age condition at first in the if statement so that you can demonstrate the error handling again. 
```
addUser: (name,age) => {
        const user = {
            name,
            age
        }

        if(age >= 21) {
            return "User created"
        } else {
            return 'User not old enough'
        }
    }
```


Now adjust the test to check for a user object with the right values:
```
test('Should return user object or a failed status', ()=> {

    expect(addUser('Joey', 21)).toEqual({name: "Joey", age: 21})

    expect(addUser('Chandler', 15)).toEqual('User not old enough')
})
```

And then adjust the function to return the user object: 
```
addUser: (name,age) => {
        const user = {
            name,
            age
        }

        if(age >= 21) {
            return user
        } else {
            return 'User not old enough'
        }
    }
```


### Now we'll write a test for a function that should take in a color and return an array that contains that color. We will adjust this test and function to be case insensitive. 

First write the test: 
```
test("Should add new color and return list of unique colors", () => {
    expect(addColor("pink")).toContain('pink')
})
```

Now write the corresponding function. You'll want to add a colors array at the top of the function file outside of the module.exports. 
```
let colors = ['Red', 'Green', 'Blue']

...

addColor: color => {
        colors.push(color)
        return colors
}
```


Now run the tests. It should work. Now add a color with an uppercase name. 
```
test("Should add new color and return list of unique colors", () => {
    expect(addColor("Pink")).toContain('pink')
})

```

This will break the test. We should adjust the function to still work no matter the casing of the parameter:
```
addColor: color => {
        colors.push(color.toLowerCase())
        return colors
    }
```

And that's it! Test driven development should make you think through all the details of a function before you write it. 