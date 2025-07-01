import { FastifyInstance } from 'fastify';

import swaggerServiceDocument from '../../assets/swagger_service.json';
import swaggerResourceDocument from '../../assets/swagger_resource.json';
import { template } from './template';

export const registerRoutes = (app: FastifyInstance) => {
    // Serve OpenAPI specs, used by ReDoc pages
    app.get('/swagger_service.json', async (_req, reply) => {
        reply.type('application/json').send(swaggerServiceDocument);
    });

    app.get('/swagger_resource.json', async (_req, reply) => {
        reply.type('application/json').send(swaggerResourceDocument);
    });

    // Serve ReDoc pages
    app.get('/doc-service', async (_req, reply) => {
        reply.type('text/html').send(template('/swagger_service.json'));
    });

    app.get('/doc-resource', async (_req, reply) => {
        reply.type('text/html').send(template('/swagger_resource.json'));
    });
}