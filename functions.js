let colors = ['Red', 'Green', 'Blue']

module.exports = {
    stateAge: (age) => {
        // return `I am ${age}.`
        return `I am ${age}`
    }, 
    addUser: (name,age) => {
        const user = {
            name,
            age
        }

        if(age >= 21) {
            // return "User created"
            return user
        } else {
            return 'User not old enough'
        }
    },
    addColor: color => {
        colors.push(color.toLowerCase())
        return colors
    }
}