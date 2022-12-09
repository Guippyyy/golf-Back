
const prisma = require('./generateClient')
const links = require('../data/links')


async function main(){
    await prisma.links.createMany({
        data : links
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