const fs = require('fs');
const path = require('path');
const faker = require('faker/locale/es');
faker.locale = 'es';

let clients = [ {
    gender: 'male',
    token: faker.datatype.uuid(),
    avatar: faker.internet.avatar(),
    fullname: 'test account',
    email: 'test@domain.com',
    id: 1,
    password: 'test',
}, {
    gender: 'male',
    token: faker.datatype.uuid(),
    avatar: faker.internet.avatar(),
    fullname: 'admin account',
    email: 'admin@domain.com',
    id: 2,
    password: 'admin',
    role: 'ADMIN'
} ];

let schedules = [
  {
    id: faker.datatype.number(),
    clientId: 1,
    date: faker.datatype.datetime().toUTCString(),
    title: faker.lorem.words(),
    description: faker.lorem.paragraph(),
  }
];

for (let i = 3; i <= 50; i++) {
  const firstName = faker.name.firstName();
  const lastName = faker.name.lastName();
  clients.push({
    gender: faker.name.gender(),
    token: faker.datatype.uuid(),
    avatar: faker.internet.avatar(),
    fullname: faker.name.findName(firstName, lastName),
    email: faker.internet.email(firstName, lastName),
    id: i,
    password: faker.internet.password(),
  })

  schedules.push({
    date: faker.datatype.datetime().toUTCString(),
    title: faker.lorem.words(),
    description: faker.lorem.paragraph(),
    clientId: i,
    id: i
  })
}

const data = { clients, schedules }

fs.writeFile(path.join(__dirname, '/db.json'),
  JSON.stringify(data, null, 2), (err) => {
    if (err) console.log('Error populating db: ', err)
    console.log('Populated db: ', path.join(__dirname, '/db.json'))
})