import { User } from "../entities/user";
import { IMailProvider } from "../providers/IMailProvider";
import { IUsersRepository } from "../repositories/IUserRepository";
import { ICreateUserRequestDTO } from "./CreateUserDTO";

export class CreateUserUseCase {
    //Sigle Responsabilty Principle --> classe apenas se importa em criar um usuário, ignora framework, conexão de banco, outras funcionalidades

    constructor(
        private usersRepository: IUsersRepository,
        private mailProvider: IMailProvider
    ) { }

    async execute(data: ICreateUserRequestDTO) {
        //Depedency Inversion --> não depende da implementação direta do repositório, depende apenas da abstração da implementação
        const userAlreadyExist = await this.usersRepository.findByEmail(data.email);

        if (userAlreadyExist) {
            throw new Error('User already exists.')
        }

        const user = new User(data);

        await this.usersRepository.save(user)

        this.mailProvider.sendMail({
            to: {
                name: data.name,
                email: data.email
            },
            from: {
                name: 'Samuel',
                email: 'samuelribeiromuca@gmail.com'
            },
            subject: "Conta criada",
            body: "Olá, sua conta foi criada com sucesso!"
        })
    }
}

