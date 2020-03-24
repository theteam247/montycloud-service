import express from 'express'
import { Handler, Router } from 'express'
import { Application } from 'express'
import glob from "glob"

class App {
  public app: Application
  public port: number

  constructor(options: { port: number; middlewares: Array<Handler | string>; routes: Array<Router | string>; }) {
    this.app = express()
    this.port = options.port

    this.middlewares(options.middlewares)
    this.routes(options.routes)
    this.assets()
  }

  private async middlewares(middlewares: Array<Handler | string>) {
    middlewares.map(middleware => {
      if(typeof middleware === "string") {
        glob.sync(`${__dirname}/${middleware}`, {
          absolute: true
        }).map(path => {
          this.app.use(require(path).default)
        })
      }
      else {
        this.app.use(middleware)
      }
    })
  }

  private routes(routes: Array<Router | string>) {
    routes.map(route => {
      if(typeof route === "string") {
        glob.sync(`${__dirname}/${route}`, {
          absolute: true
        }).map(path => {
          this.app.use("/", require(path).default)
        })
      }
      else {
        this.app.use("/", route)
      }
    })
  }

  private assets() {
    this.app.use(express.static('public'))
    this.app.use(express.static('views'))
  }

  public listen() {
    this.app.listen(this.port, () => {
      console.log(`App listening on the http://localhost:${this.port}`)
    })
  }
}

export default App