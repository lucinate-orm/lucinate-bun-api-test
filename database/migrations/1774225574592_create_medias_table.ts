import { BaseSchema } from "lucinate";

export default class extends BaseSchema {
    override async up() {
        this.schema.createTable("medias", (table: any) => {
            table.increments("id").primary();
            table.string("url").notNullable();
            table.string("type").notNullable();
            table.string("name").notNullable();
            table.timestamps(true, true);
        });
    }

    override async down() {
        this.schema.dropTable("medias");
    }
}
