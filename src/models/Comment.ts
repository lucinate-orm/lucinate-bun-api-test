import {
    BaseModel,
    belongsTo,
    column,
    type BelongsTo,
} from "lucinate";
import { DateTime } from "luxon";
import Post from "./Post.js";
import User from "./User.js";

export default class Comment extends BaseModel {
    static override table = "comments";

    @column({ isPrimary: true })
    declare id: number;

    @column()
    declare userId: number;

    @column()
    declare postId: number;

    @column()
    declare content: string;

    @column.dateTime({ autoCreate: true })
    declare createdAt: DateTime;

    @column.dateTime({ autoCreate: true, autoUpdate: true })
    declare updatedAt: DateTime;

    @belongsTo(() => User)
    declare user: BelongsTo<typeof User>;

    @belongsTo(() => Post)
    declare post: BelongsTo<typeof Post>;
}
