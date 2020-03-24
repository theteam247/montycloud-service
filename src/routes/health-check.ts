import { Router } from "express";

const path = "/health-check";
const router = Router();

router.get(`${path}`, (req, res) => {
  res.status(204).end();
});

export default router;
