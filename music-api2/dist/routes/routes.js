"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.router = void 0;
var express_1 = require("express");
var songController_1 = __importDefault(require("../controllers/songController"));
var router = (0, express_1.Router)();
exports.router = router;
// router.post('/song/:id', songController.reactLike);
router.get('/songs', songController_1.default.allSongs);
router.get('/song/:id', songController_1.default.getSong);
router.post('/song', songController_1.default.addSong);
router.delete('/song/:id', songController_1.default.deleteSong);
router.put('/song/:id', songController_1.default.updateSong);
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoicm91dGVzLmpzIiwic291cmNlUm9vdCI6Ii4vc3JjLyIsInNvdXJjZXMiOlsicm91dGVzL3JvdXRlcy50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7QUFBQSxtQ0FBaUM7QUFDakMsaUZBQTJEO0FBQzNELElBQU0sTUFBTSxHQUFHLElBQUEsZ0JBQU0sR0FBRSxDQUFDO0FBU2hCLHdCQUFNO0FBUGQsc0RBQXNEO0FBQ3RELE1BQU0sQ0FBQyxHQUFHLENBQUMsUUFBUSxFQUFDLHdCQUFjLENBQUMsUUFBUSxDQUFDLENBQUM7QUFDN0MsTUFBTSxDQUFDLEdBQUcsQ0FBQyxXQUFXLEVBQUMsd0JBQWMsQ0FBQyxPQUFPLENBQUMsQ0FBQztBQUMvQyxNQUFNLENBQUMsSUFBSSxDQUFDLE9BQU8sRUFBQyx3QkFBYyxDQUFDLE9BQU8sQ0FBQyxDQUFDO0FBQzVDLE1BQU0sQ0FBQyxNQUFNLENBQUMsV0FBVyxFQUFDLHdCQUFjLENBQUMsVUFBVSxDQUFDLENBQUM7QUFDckQsTUFBTSxDQUFDLEdBQUcsQ0FBQyxXQUFXLEVBQUUsd0JBQWMsQ0FBQyxVQUFVLENBQUMsQ0FBQyJ9