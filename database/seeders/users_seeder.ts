import { BaseSeeder } from "lucinate";
import User from "@/models/User.js";

export default class extends BaseSeeder {
    override async run() {
        const users = [
            {
                name: "John Doe",
                email: "john.doe@example.com",
                password: "password",
            },
            {
                name: "Jane Doe 2",
                email: "jane.doe-2@example.com",
                password: "password",
            },
            {
                name: "John Smith",
                email: "john.smith@example.com",
                password: "password",
            },
            {
                name: "Jane Smith 2",
                email: "jane.smith-2@example.com",
                password: "password",
            },
            {
                name: "John Doe 3",
                email: "john.doe-3@example.com",
                password: "password",
            },
        ];

        for (const user of users) {
            user.password = await Bun.password.hash(user.password);
        }

        await User.createMany(users);
    }
}
