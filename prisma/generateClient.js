const { PrismaClient } = require("@prisma/client");

let DATABASE_URL = "mysql://185375gd:Nkmo6wL5SMSBjs97fHib@vichogent.be:40043/185375gd?connection_limit=5&socket_timeout=3"
if (process.env.NODE_ENV === "production") {
    DATABASE_URL = `mysql://${DATABASE_USERNAME}:${DATABASE_PASSWORD}@${DATABASE_HOST}:${DATABASE_PORT}/${DATABASE_NAME}?connection_limit=5&socket_timeout=3`
}

const prisma = new PrismaClient({
        datasources: {
            db: {
                url: DATABASE_URL
            },
        },
    }
);
module.exports = prisma;
