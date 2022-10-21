import { faker } from '@faker-js/faker';

class dataFaker {
    constructor() {
        this.data = {
            PRICE: faker.datatype.number(100),
        };
    }
}
const data = new dataFaker();
export default data;