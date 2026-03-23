import { BaseSchema } from "lucinate";

export default class extends BaseSchema {
    override async up() {
        this.schema.createTable("posts", (table: any) => {
            table.increments("id").primary();
            table.string("title").notNullable();
            table.text("content").notNullable();
            table.timestamps(true, true);
        });
    }

    override async down() {
        this.schema.dropTable("posts");
    }
}
