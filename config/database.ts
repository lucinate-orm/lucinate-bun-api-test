import { defineConfig } from "lucinate";

export default defineConfig({
    connection: "default",
    connections: {
        default: {
            client: "mysql2",
            useNullAsDefault: true,
            connection: {
                host: process.env.DB_HOST ?? "localhost",
                port: Number(process.env.DB_PORT ?? 3306),
                user: process.env.DB_USER ?? "root",
                password: process.env.DB_PASSWORD ?? "",
                database: process.env.DB_DATABASE ?? "lucinate_api_test",
            },
            migrations: {
                paths: ["database/migrations"],
            },
            seeders: {
                paths: ["database/seeders"],
            },
        },
    },
});
