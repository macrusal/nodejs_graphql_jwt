import * as express from 'express';
import * as grphqlHTTP from 'express-graphql';
import schema from './graphql/schema';

class App {
    public express: express.Application;

    constructor(){
        this.express = express();
        this.middleware();
    }

    private middleware(): void {
        this.express.use('/graphql', grphqlHTTP({
            schema: schema
        }));
    }
}

export default new App().express;