import { Sequelize } from "sequelize";

export const sequelize = new Sequelize({
    dialect: "postgres",
    host: "localhost",
    port: 5432,
    database: "neetflix_dev",
    username: "neetflix",
    password: "neetflix",
    define: {
        underscored: true,
    },
});
