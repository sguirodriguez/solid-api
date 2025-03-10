import { User } from "../../entities/user";
import { IUsersRepository } from "../IUserRepository";

export class PostgresUsersRepository implements IUsersRepository {
    private users: User[] = [];
    async findByEmail(email: string): Promise<User> {
        const user = this.users.find(user => user.email = email)

        return user

    }
    async save(user: User): Promise<void> {
        this.users.push(user);
    }

}