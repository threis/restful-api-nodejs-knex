import fastify from 'fastify'
import { env } from './env'
import { transactionRoutes } from './routes/transactions'
import cookie from '@fastify/cookie'

const app = fastify()

app.register(cookie)
app.addHook('preHandler', async (request) => {
  console.log(`[${request.method} ${request.url}]`)
})
app.register(transactionRoutes, { prefix: 'transactions' })

app.listen({ port: env.PORT }).then(() => {
  console.log('server listening on port 3333')
})
