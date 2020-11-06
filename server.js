const express = require("express"),
    app = express(),
    port = 8000,
    cors = require("cors"),
    faker = require("faker");

app.use(cors());
app.use(express.json());

class User {
    constructor() {
        this.id = faker.random.number();
        this.firstName = faker.name.firstName();
        this.lastName = faker.name.lastName();
        this.phoneNumber = faker.phone.phoneNumber();
        this.email = faker.internet.email();
        this.password = faker.internet.password();
    }
}
// const newUser = new User();
console.log(new User()); 

class Company {
    constructor() {
        this.id = faker.random.number();
        this.name = faker.company.companyName();
        this.address = {
            street: faker.address.streetAddress(),
            city: faker.address.city(),
            state: faker.address.state(),
            zipcode: faker.address.zipCode(),
            country: faker.address.country(),
        }
    }
}
console.log(new Company());


app.get('/',(req, res) => {
    res.json({msg: "Welcome to the FAKER_API assignment!"})
})

app.get('/api/users/new', (req, res) => {
    console.log(req.body);
    res.json({user: new User()})
})

app.get('/api/companies/new', (req, res) => {
    console.log(req.body);
    res.json({company: new Company()})
})

app.get('/api/user/company', (req, res) => {
    console.log(req.body);
    res.json({user: new User(), company: new Company()})
    // res.json({company: new Company()})
})

app.listen(port, () => console.log(`Listening on port ${port}`))
