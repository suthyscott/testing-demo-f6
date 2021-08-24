// const {test} = require("@jest/globals")
const {stateAge, addUser,addColor} = require('./functions')

test('Should return I am {age}', () => {
    expect(stateAge(25)).toEqual("I am 25")
})

test('Should return user object or a failed status', ()=> {

    // expect(addUser('Joey', 21)).toEqual('User created')
    expect(addUser('Joey', 21)).toEqual({name: "Joey", age: 21})

    expect(addUser('Chandler', 15)).toEqual('User not old enough')
})

test("Should add new color and return list of unique colors", () => {
    // expect(addColor("pink")).toContain('pink')
    expect(addColor("Pink")).toContain('pink')

})