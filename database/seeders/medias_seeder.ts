import { BaseSeeder } from "lucinate";
import Media from "@/models/Media.js";

export default class extends BaseSeeder {
    override async run() {
        const medias = [
            {
                url: "https://example.com/media.jpg",
                type: "image",
                name: "media.jpg",
            },
            {
                url: "https://example.com/media.png",
                type: "image",
                name: "media.png",
            },
            {
                url: "https://example.com/media.gif",
                type: "image",
                name: "media.gif",
            },
        ];

        await Media.createMany(medias);
    }
}
