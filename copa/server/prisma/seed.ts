import { PrismaClient } from '@prisma/client'

const prisma = new PrismaClient()

async function main() {
    const user = await prisma.user.create({
        data: {
            name: 'Jonh Doe',
            email: 'jonh.doe@gmail.com',
            avatarUrl: 'https://github.com/JulianeKa.png'
        }
    })

    const poll = await prisma.poll.create({
        data: {
            title:'Example Pool',
            code: 'BOL123',
            ownerId: user.id,

            participants: {
                create: {
                    userId: user.id,
                }
            }
        }
    })

    await prisma.game.create({
        data: {
            date: '2022-11-04T20:39:14.587Z',
            firstTeamCountryCode: 'DE',
            secondTeamCountryCode: 'BR',
        }
    })

    await prisma.game.create({
        data: {
            date: '2022-11-18T20:39:14.587Z',
            firstTeamCountryCode: 'BR',
            secondTeamCountryCode: 'AR',

            guesses: {
                create: {
                    firstTeamPoints: 5,
                    secondTeamPoints: 0,

                    participant: {
                        connect: {
                            userId_pollId: {
                                userId: user.id,
                                pollId: poll.id,
                            }
                        }
                    }
                }
            }
        }
    })
}

main()