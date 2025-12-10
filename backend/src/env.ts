import { load } from "ts-dotenv";
import * as dotenv from "dotenv";
dotenv.config();

export default load({
    GRAPHQL_SERVER_PORT: Number,
    EXPRESS_SERVER_PORT: Number,

});