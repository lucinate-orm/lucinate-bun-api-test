import { BaseModel, column } from "lucinate";
import { DateTime } from "luxon";

export default class User extends BaseModel {
    static override table = "users";

    @column({ isPrimary: true })
    declare id: number;

    @column()
    declare name: string;

    @column()
    declare email: string;

    @column()
    declare password: string;

    @column.dateTime({ autoCreate: true })
    declare createdAt: DateTime;

    @column.dateTime({ autoCreate: true, autoUpdate: true })
    declare updatedAt: DateTime;
}
