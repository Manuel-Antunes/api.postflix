import Sequelize from 'sequelize';
import Mongoose from 'mongoose';
import databaseConfig from '../config/database';

const models = [];

class Database {
    constructor() {
        this.mongo();
    }

    init() {
        this.connection = new Sequelize(databaseConfig);
        models
            .map(model => model.init(this.connection))
            .map(model => model.associate && model.associate(this.connection.models));
    }
    mongo() {
        console.log(process.env.MONGO_URL);
        Mongoose.connect(process.env.MONGO_URL, {
            useNewUrlParser: true,
            useUnifiedTopology: true,
            useFindAndModify: true
        });
    }
}

export default new Database();