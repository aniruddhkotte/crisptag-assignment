const fastify = require('fastify')
const app = fastify()

app.get('/g', function (request, reply) {
    reply.redirect("https://google.com")
})

app.listen(3000, function (err, address) {
    if (err) {
        console.error(err)
        process.exit(1)
    }
    console.log(`Server listening on ${address}`)
})
