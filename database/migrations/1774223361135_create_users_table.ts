import { BaseSchema } from "lucinate";

export default class extends BaseSchema {
    override async up() {
        this.schema.createTable("users", (table: any) => {
            table.increments("id").primary();
            table.string("name").notNullable();
            table.string("email").notNullable().unique();
            table.string("password").notNullable();
            table.timestamps(true, true);
        });
    }

    override async down() {
        this.schema.dropTable("users");
    }
}
