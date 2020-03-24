import { Router } from 'express'
import db from "../globals/db"

const path = "/stats"
const router = Router()

router.get(`${path}`, (req, res, next) => {
  db.then(db => {
    const events = db.get("events")

    const qps = events.value().length * 1000 / (events.last().get("time").value() - events.first().get("time").value())

    res.json({
      qps: qps,
      qpm: qps * 60,
      total: events.groupBy("name").reduce((acc, val, key) => ({
        ...acc,
        [key]: val.length
      }), {})
    })
  })
})

export default router;