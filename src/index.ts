// Start server
import { app } from "./app";

app.listen({ port: 3001 }, (err, address) => {
    if (err) {
        app.log.error(err);
        process.exit(1);
    }
    console.log(`📘 Local ReDoc is now available at: ${address}/docs`);
});



