import { BaseModel, column } from "lucinate";
import { DateTime } from "luxon";

export default class Media extends BaseModel {
    static override table = "medias";

    @column({ isPrimary: true })
    declare id: number;

    @column()
    declare url: string;

    @column()
    declare type: string;

    @column()
    declare name: string;

    @column.dateTime({ autoCreate: true })
    declare createdAt: DateTime;

    @column.dateTime({ autoCreate: true, autoUpdate: true })
    declare updatedAt: DateTime;
}
