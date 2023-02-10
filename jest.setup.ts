import { Sequelize } from "sequelize-typescript";


const seq = new Sequelize({
    dialect: 'sqlite',
    storage: ':memory:',
    logging: false
});
seq.sync();
seq.authenticate();
