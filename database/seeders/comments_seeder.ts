import { BaseSeeder } from "lucinate";
import Comment from "@/models/Comment.js";
import Post from "@/models/Post.js";
import User from "@/models/User.js";

export default class extends BaseSeeder {
    override async run() {
        const users = await User.all();
        const posts = await Post.all();

        for (const post of posts) {
            for (const user of users) {
                await Comment.create({
                    content: `Comment ${post.id} for post ${post.id}`,
                    userId: user.id,
                    postId: post.id,
                });
            }
        }
    }
}
