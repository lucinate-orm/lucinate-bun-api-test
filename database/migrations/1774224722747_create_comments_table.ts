import { BaseSchema } from "lucinate";

export default class extends BaseSchema {
    override async up() {
        this.schema.createTable("comments", (table: any) => {
            table.increments("id").primary();
            table.integer("user_id").unsigned().notNullable();
            table.foreign("user_id").references("id").inTable("users");
            table.integer("post_id").unsigned().notNullable();
            table.foreign("post_id").references("id").inTable("posts");
            table.text("content").notNullable();
            table.timestamps(true, true);
        });
    }

    override async down() {
        this.schema.dropTable("comments");
    }
}
