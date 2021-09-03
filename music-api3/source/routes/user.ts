import express from 'express';
import controller from '../controllers/user';
import extractJWT from '../middleware/extractJWT';
import SongController from '../controllers/song'

const router = express.Router();

router.get('/validate', extractJWT, controller.validateToken);
router.post('/register', controller.register);
router.post('/login', controller.login);
router.get('/get/all', controller.getAllUsers);
router.get('/songs',SongController.getAllSongs);
router.get('/song/:id',SongController.getAllSongs)
router.post('./song/:id', SongController.createSong);
router.put('./song/:id', SongController.updateSong);
router.post('./song/:id/react', SongController.reactSong);

export = router;
