import Post from "@/models/Post";
import type { BunRequest as Request } from "bun";
import { z } from "zod";

export default class PostController {
    static async index(request: Request): Promise<Response> {
        const posts = await Post.all();
        return Response.json(posts);
    }

    static async show(request: Request): Promise<Response> {
        const post = await Post.find(request.params.id);
        if (!post) {
            return Response.json(
                { message: "Post not found" },
                { status: 404 },
            );
        }
        return Response.json(post);
    }

    static async store(request: Request): Promise<Response> {
        const body: any = await request.json();
        const { success, data } = z
            .object({
                title: z.string().min(3).max(255),
                content: z.string().min(3).max(1000),
            })
            .safeParse(body);

        if (!success) {
            return Response.json({ message: "Invalid data" }, { status: 400 });
        }

        const post = await Post.create(data);
        return Response.json(post);
    }

    static async update(request: Request): Promise<Response> {
        const body: any = await request.json();
        const { success, data } = z
            .object({
                title: z.string().min(3).max(255).optional(),
                content: z.string().min(3).max(1000).optional(),
            })
            .safeParse(body);

        if (!success) {
            return Response.json({ message: "Invalid data" }, { status: 400 });
        }

        const post = await Post.find(request.params.id);
        if (!post) {
            return Response.json(
                { message: "Post not found" },
                { status: 404 },
            );
        }

        post.merge(data);
        await post.save();
        return Response.json(post);
    }

    static async destroy(request: Request): Promise<Response> {
        const post = await Post.find(request.params.id);
        if (!post) {
            return Response.json(
                { message: "Post not found" },
                { status: 404 },
            );
        }
        await post.delete();
        return Response.json({ message: "Post deleted" });
    }
}
