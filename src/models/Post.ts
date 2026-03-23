import { BaseModel, column } from "lucinate";
import { DateTime } from "luxon";

export default class Post extends BaseModel {
    static override table = "posts";

    @column({ isPrimary: true })
    declare id: number;

    @column()
    declare title: string;

    @column()
    declare content: string;

    @column.dateTime({ autoCreate: true })
    declare createdAt: DateTime;

    @column.dateTime({ autoCreate: true, autoUpdate: true })
    declare updatedAt: DateTime;
}
