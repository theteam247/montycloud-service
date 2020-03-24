import * as platformPath from "path";
import { Router } from "express";

const path = "/store";
const router = Router();

router.get(`${path}/:file_name`, (req, res) => {
  res.sendFile(
    platformPath.resolve(__dirname, `../../store/${req.params.file_name}`)
  );
});

export default router;
