const typeDefs = `#graphql 
type Query {
    hello: String
    users: [User]
}
type Mutation {
    createUser(name: String!, email: String!, age: Int): User
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
        email: 'john@mail.com',
        age: 25,
    },
    {
        id: '2',
        name: 'Jane Doe',
        email: 'jane@mail.com',
        age: 30,
    },
    {
        id: '3',
        name: 'John Smith',
        email: 'jonny@mail.com',
        age: 35,
    },
];
const resolvers = {
    Query: {
        hello: () => 'Hello world!',
        users: () => users,
    },
    Mutation: {
        createUser: (_parent, args, _context, _info) => {
            const newUser = {
                id: String(users.length + 1),
                name: args.name,
                email: args.email,
                age: args.age,
            };
            users.push(newUser);
            return newUser;
        },
    },
};
export { typeDefs, resolvers };
