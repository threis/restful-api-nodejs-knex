import fastify from 'fastify'

const app = fastify()

app.get('/hello', () => {
  return { message: 'Hello' }
})

app.listen({ port: 3333 }).then(() => {
  console.log('server listening on port 3333')
})
