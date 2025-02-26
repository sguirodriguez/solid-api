import { User } from "../entities/user";

//LISKOV --> DEFINE COMO SERÁ IMPLEMENTADO O REPOSITORY, QUALQUER IMPLEMENTAÇÃO DESSA INTERFACE PODE SER USADA NA CRIAÇÃO DE USUÁRIO
// EXEMPLO: TENHO UMA CRIAÇÃO DE USUÁRIO EM POSTGREE E OUTRA EM MYSQL, SE CADA REPOSITORY IMPLEMENTA ESSA INTERFACE, CAI NO PRINCIPIO DE LISKOV
// POIS A CLASSE PADRAO PODE SER SUBSTITUIDA PELA SUBCLASSE

//Interface Segregation --> não implementa métodos que não usa e não possue funcionalidades sem relação

export interface IUsersRepository {
    findByEmail(email: string): Promise<User>;
    save(user: User): Promise<void>;
}