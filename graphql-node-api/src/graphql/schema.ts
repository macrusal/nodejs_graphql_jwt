import { makeExecutableSchema } from 'graphql-tools';

const users: any[] = [
    {
        id: 1, 
        name: 'Marcelo',
        email: 'marcelo@hibejix.com.br'
    },
    {
        id: 2, 
        name: 'Hugo',
        email: 'hugo@hibejix.com.br'
    },
    {
        id: 3, 
        name: 'Dandara',
        email: 'dandara@hibejix.com.br'
    }
];

const typeDefs = `
    type User {
        id: ID!
        name: String!
        email: String!
    }

    type Query {
        allUsers: [User!]!
    }
`;

const resolvers = {

    Query: {
        allUsers: () => users
    }
};

export default makeExecutableSchema({typeDefs, resolvers});