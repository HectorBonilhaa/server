import Fastify from 'fastify'
import cors from '@fastify/cors'
import { appRoutes } from "./routes"

const app = Fastify()

app.register(cors)
app.register(appRoutes)

app.listen({
  port: 3333,
  host: '0.0.0.0',
}).then(() => {
  console.log('HTTP Server running!')
})

// app.listen(process.env.PORT || 5000, () => {
//   console.log("Server is Running");
  
// })