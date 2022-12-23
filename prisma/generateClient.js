const { PrismaClient } = require("@prisma/client");
const config = require("config");

console.log(process.env.NODE_ENV);
// if (process.env.NODE_ENV === "production") {
//     DATABASE_URL = `mysql://${process.env.DATABASE_USERNAME}:${process.env.DATABASE_PASSWORD}@${process.env.DATABASE_HOST}:${process.env.DATABASE_PORT}/${process.env.DATABASE_NAME}?connection_limit=5&socket_timeout=3`
// } else {
//     //DATABASE_URL = "mysql://root:Wgtgui123@localhost:3306/golf?connection_limit=5&socket_timeout=3"
// }
DATABASE_URL = `mysql://${config.get('database.username')}:${config.get("database.password")}@${config.get("database.host")}:${config.get("database.port")}/${config.get("database.name")}?connection_limit=5&socket_timeout=3`



const prisma = new PrismaClient({
        datasources: {
            db: {
                url: DATABASE_URL
            },
        },
    }
);
module.exports = prisma;
