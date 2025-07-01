import path from "node:path";
import Fastify from "fastify";

import fastifyStatic from "@fastify/static";

import {registerRoutes} from "./routes";

export const app = Fastify({ logger: true });

// Serve static files
// find the "redoc.standalone.js" and place it to "/assets/redoc.standalone.js"
app.register(fastifyStatic, {
    root: path.join(__dirname, '../../node_modules/redoc/bundles'),
    prefix: '/assets/',
    decorateReply: false,
});

registerRoutes(app);