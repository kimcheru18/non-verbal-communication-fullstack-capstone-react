// connect to db
// insert seed data into db
// make HTTP requests to API using the test client
// inspect the state of the db after request is made
// tear down the db

// using ES6 promises

const chai = require('chai');
const chaiHttp = require('chai-http');
const faker = require('faker');
const mongoose = require('mongoose');

// requiring in the js files from this app
const Statement = require('../models/statement');
//console.log(Statement);
const User = require('../models/user');
//console.log(User);
const {
    app,
    runServer,
    closeServer
} = require('../server');
// import TEST_DATABASE_URL from ('../config');
const {
    DATABASE_URL,
    TEST_DATABASE_URL
} = require('../config');
console.log(TEST_DATABASE_URL);


const should = require('chai').should();
chai.use(chaiHttp);


//function definitions
function seedStatementData() {
    console.info('Seeding statment data')
    const seedData = [];

    for (let i = 1; i < Statement.length; i++) {
        seedData.push(generateStatementData());
    }
    // console.log(seedData);
    // console.log(Statement);
    // should return a promise
    return Statement.insertMany(seedData);
}

const testUsername = faker.random.word() + faker.random.number();


function generateUserData() {
    return {
        username: testUsername,
        password: faker.random.word()
    }
}

function generateStatementData() {
    return {
        // should be the same as username from generateUserData() above
        user: testUsername,
        body: faker.lorem.sentence(),
        values: faker.lorem.sentence(),
        beliefs: faker.lorem.sentence(),
        goals: faker.lorem.sentence()
    }
}

function tearDownDb() {
    console.warn('Deleting database!');
    //    return mongoose.connection.dropDatabase();
}

describe('Statements API resource', function () {

    before(function () {
        return runServer(TEST_DATABASE_URL)
            .then(console.log('running server'))
            .catch(err => console.log({
                err
            }));
    });

    beforeEach(function () {
        return seedStatementData();
    });

    describe('GET endpoint', function () {
        it('should return all statements in the DB for a user', function () {
            let res;
            return chai.request(app)
                .get('/statements/' + testUsername)
                .then(function (_res) {
                    res = _res;
                    res.should.have.status(200);
                    res.body.statementOutput.should.have.length.of.at.least(1);
                    return Statement.count();
                })
                .then(function (count) {
                    res.body.statementOutput.should.have.length.of(count);
                });
            done();
        });
    });

    it('should return statements with the right fields', function () {
        // ensure they have the expected keys
        return chai.request(app)
            .get('/statements/' + testUsername)
            .then(function (res) {
                res.should.have.status(200);
                res.should.be.json;
                res.body.statementOutput.should.be.a('array');
                res.body.statementOutput.should.have.length.of.at.least(1);

                res.body.statementOutput.forEach(function (statement) {
                    statement.should.be.a('object');
                    statement.should.include.keys(
                        'user', 'body', 'values', 'beliefs', 'goals');
                });
                done();
            });
    });


    describe('POST endpoint', function () {
        it('should add a new statement', function () {
            const newStatement = generateStatementData();
            console.log(newStatement);

            return chai.request(app)
                .post('/new/create')
                .send(newStatement)
                .then(function (res) {
                    res.should.have.status(200);
                    res.should.be.json;
                    res.body.should.be.a('object');
                    res.body.should.include.keys(
                        'user', 'body', 'values', 'beliefs', 'goals');
                    res.body.user.should.equal(newStatement.user);
                    res.body.body.should.equal(newStatement.body);
                    res.body.values.should.equal(newStatement.values);
                    res.body.beliefs.should.equal(newStatement.beliefs);
                    res.body.goals.should.equal(newStatement.goals);
                    res.body._id.should.not.be.null;

                    return Statement.findById(res.body.id);
                });
        });
    });

    describe('PUT endpoint', function () {
        it('should update fields sent over', function () {
            const updateData = {
                body: 'Picked a peck of pickled peppers',
                values: 'To fetch a pail of water',
                beliefs: 'To fetch a pail of water',
                goals: 'To fetch a pail of water'
            };

            return Statement
                .findOne()
                .then(function (statement) {
                    updateData.id = statement.id;
                    return chai.request(app)
                        .put(`/statement/${statement.id}`)
                        .send(updateData);
                })
                .then(function (res) {
                    res.should.have.status(204);
                    return Statement.findById(updateData.id);
                })

                .then(function (statement) {
                    statement.body.should.equal(updateData.body);
                    statement.values.should.equal(updateData.values);
                    statement.beliefs.should.equal(updateData.beliefs);
                    statement.goals.should.equal(updateData.goals);
                });
        });
    });



    describe('DELETE endpoint', function () {
        it('should delete a statement by ID', function () {
            let statement;
            return Statement
                .findOne()
                .then(function (_statement) {
                    statement = _statement;
                    return chai.request(app).delete(`/_statement/${_statement.id}`);
                })
                .then(function (res) {
                    res.should.have.status(204);
                    return Statement.findById(statement.id);
                })
                .then(function (_statement) {
                    should.not.exist(_statement);
                });
        });
    });



    afterEach(function () {
        return tearDownDb();
    });

    after(function () {
        return closeServer();
    });
});
