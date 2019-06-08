"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const express = require("express");
const grphqlHTTP = require("express-graphql");
const schema_1 = require("./graphql/schema");
class App {
    constructor() {
        this.express = express();
        this.middleware();
    }
    middleware() {
        this.express.use('/graphql', grphqlHTTP({
            schema: schema_1.default
        }));
    }
}
exports.default = new App().express;
