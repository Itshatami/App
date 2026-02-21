import sequelize from "../config/sequelize.config.js";

export default async function initDatabase() {
    // await sequelize.sync({force:true})
    // await sequelize.sync({alter:true})
    await sequelize.sync()
}