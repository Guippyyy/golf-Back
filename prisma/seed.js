
const prisma = require('./generateClient')
const users = require('../data/links')


async function main(){
    await prisma.user.createMany({
        data : users
    })
} 

main()
    .catch((e) => {
        console.error(e);
        process.exit(1);
        }
    )
    .finally(async() => {
        await prisma.$disconnect
    })