import express from 'express';
import personRouter from './routes/personRoute';
import * as dotenv from 'dotenv';
dotenv.config();
import fs from 'fs';
import path from 'path';
// const router = express.Router()
const __dirname = path.resolve();
let rawData = fs.readFileSync(__dirname + '/src/persons.json');
let persons2 = JSON.parse(rawData.toString());
const typeDefs = gql `
  type Query {
    hello: String
    users: [User]
  }

  type User {
    id: ID!
    name: String!
    email: String!
    age: Int
  }
`;
const users = [
    {
        id: '1',
        name: 'John Doe',
        email: ',
        age: 25,
    },
    {
        id: '2',
        name: 'Jane Doe',
        email: ',
        age: 30,
    },
    {
        id: '3',
        name: 'John Smith',
        email: ',
        age: 35,
    },
];
const resolvers = {
    Query: {
        hello: () => 'Hello world!',
        users: () => users,
    },
};
`` `
9. Run `;
npm;
run;
dev ` and go to `;
http: //localhost:4000/graphql` to see the GraphQL playground.
 const app = express();
app.use('/api/person', personRouter);
app.get('/test', (req, res) => {
    const highestId = Math.max.apply(Math, persons2.map(function (o) { return o.id; }));
    persons2.push({ id: highestId + 1, name: 'Josh Doe', age: 30, city: 'Copenhagen' });
    res.json({ persons: persons2 });
    // res. json({message: process.env.PRIVATE_KEY});
});
// app.get('/', (req:Request, res:Response) => {
//     // res.send('Hello World');
//     res.json({message: 'Hello World'});
// });
// app.get('/api/person', (req:Request, res:Response) => {
//     res.json({persons:persons});
// });
// app.get('/api/person/:id', (req:Request, res:Response) => {
//     const id = parseInt(req.params.id);
//     const person = persons.find(person => person.id === id);
//     if (person) {
//         res.json({person:person});
//     } else {
//         res.status(404).json({message: `Person with id ${id} not found`});
//     }
// });
app.listen(3000, () => console.log('Server running on port 3000'));
