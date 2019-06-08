"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const graphql_tools_1 = require("graphql-tools");
const users = [
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
exports.default = graphql_tools_1.makeExecutableSchema({ typeDefs, resolvers });