import path from "node:path";
import Fastify from "fastify";
import fastifyStatic from "@fastify/static";

import {registerRoutes} from "./routes";

export const app = Fastify({ logger: true });

// Serve redoc.standalone.js statically
app.register(fastifyStatic, {
    root: path.join(__dirname, '../../node_modules/redoc/bundles'),
    prefix: '/assets/',
    decorateReply: false,
});

registerRoutes(app);

