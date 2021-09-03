import { Router } from "express";
import songController from "../controllers/songController";
const router = Router();

// router.post('/song/:id', songController.reactLike);
router.get('/songs',songController.allSongs);
router.get('/song/:id',songController.getSong);
router.post('/song',songController.addSong);
router.delete('/song/:id',songController.deleteSong);
router.put('/song/:id', songController.updateSong);

export {router};