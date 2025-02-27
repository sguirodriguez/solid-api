

import { CreateUserUseCase } from "./CreateUserUseCase";
import { CreateUserController } from "./CreateUserController";
import { PostgresUsersRepository } from "../repositories/implementations/PostgresUserRepository";
import { MailtrapMailProvider } from "../providers/implementations/MailTrapMailProvider";

const postgresUsersRepository = new PostgresUsersRepository()
const mailtrapMailProvider = new MailtrapMailProvider()

const createUserUseCase = new CreateUserUseCase(
    postgresUsersRepository,
    mailtrapMailProvider,
)

const createUserController = new CreateUserController(
    createUserUseCase
)

export { createUserUseCase, createUserController }