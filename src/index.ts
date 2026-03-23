import PostController from "./controllers/PostController";
// import type { BunRequest as Request } from "bun";
import { bootDatabase } from "lucinate";

await bootDatabase();

Bun.serve({
    port: 8001,
    hostname: "0.0.0.0",
    routes: {
        "/posts/:id": {
            GET: PostController.show,
            PUT: PostController.update,
            DELETE: PostController.destroy,
        },
        "/posts/": {
            GET: PostController.index,
            POST: PostController.store,
        },
    },
    fetch: (request) => {
        return new Response("Not found", { status: 404 });
    },
});
