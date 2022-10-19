import { faker } from '@faker-js/faker';

class dataFaker {
    constructor() {
        this.data = {
            FIRST_NAME: 'Automation ' + faker.name.firstName(),
            LAST_NAME: faker.name.lastName() + faker.datatype.number(),
            EMAIL: 'lucilene.martins.nascimento+1@gmail.com',
            PASSWORD: faker.internet.password() + '$Lm'
        };
    }
}
const data = new dataFaker();
export default data;