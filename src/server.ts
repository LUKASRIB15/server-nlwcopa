import Fastify from 'fastify'
import jwt from '@fastify/jwt'
import cors from '@fastify/cors'

import { PoolRoutes } from './routes/pool'
import { UserRoutes } from './routes/user'
import { GuessRoutes } from './routes/guess'
import { AuthRoutes } from './routes/auth'
import { GameRoutes } from './routes/game'

async function bootstrap(){
    //Faz o monitoramento da aplicação, facilitando para o desenvolvedor
    const fastify = Fastify({
        logger: true,
    })

    await fastify.register(cors, {
        origin: true,
    })

    await fastify.register(jwt,{
        secret: 'nlwcopa'
    })

    await fastify.register(PoolRoutes)
    await fastify.register(UserRoutes)
    await fastify.register(GuessRoutes)
    await fastify.register(AuthRoutes)
    await fastify.register(GameRoutes)

    await fastify.listen({port: 3333, host: '0.0.0.0'})
}

bootstrap()