"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.updateSong = exports.deleteSong = exports.addSong = exports.getSong = exports.allSongs = void 0;
var song_1 = __importDefault(require("../models/song"));
var allSongs = function (req, res) {
    var songs = song_1.default.find(function (err, songs) {
        if (err) {
            res.send(err);
        }
        else {
            res.send(songs);
        }
    });
};
exports.allSongs = allSongs;
var getSong = function (req, res) {
    song_1.default.findById(req.params.id, function (err, song) {
        if (err) {
            res.send(err);
        }
        else {
            res.send(song);
        }
    });
};
exports.getSong = getSong;
var addSong = function (req, res) {
    var song = new song_1.default(req.body);
    song.save(function (err) {
        if (err) {
            res.send(err);
        }
        else {
            res.send(song);
        }
    });
};
exports.addSong = addSong;
var deleteSong = function (req, res) {
    song_1.default.deleteOne({ _id: req.params.id }, function (err) {
        if (err) {
            res.send(err);
        }
        else {
            res.send("Song deleted!");
        }
    });
};
exports.deleteSong = deleteSong;
var updateSong = function (req, res) {
    song_1.default.findByIdAndUpdate(req.params.id, req.body, function (err) {
        if (err) {
            res.send(err);
        }
        else {
            res.send("Song information are updated!");
        }
    });
};
exports.updateSong = updateSong;
// export let reactLike = (req:Request, res:Response)=>{
//     Song.findByIdAndUpdate(req.params.id, req.body,(err:any, song:any)=>{
//         if(err){
//             res.send(err)
//         }else{
//             res.send("Song information are updated!");
//         }
//     })
// }
exports.default = { allSongs: exports.allSongs, getSong: exports.getSong, deleteSong: exports.deleteSong, updateSong: exports.updateSong, addSong: exports.addSong };
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic29uZ0NvbnRyb2xsZXIuanMiLCJzb3VyY2VSb290IjoiLi9zcmMvIiwic291cmNlcyI6WyJjb250cm9sbGVycy9zb25nQ29udHJvbGxlci50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7QUFDQSx3REFBbUM7QUFHNUIsSUFBSSxRQUFRLEdBQUcsVUFBQyxHQUFXLEVBQUUsR0FBWTtJQUM1QyxJQUFJLEtBQUssR0FBRyxjQUFJLENBQUMsSUFBSSxDQUFDLFVBQUMsR0FBTyxFQUFFLEtBQVM7UUFDckMsSUFBRyxHQUFHLEVBQUM7WUFDSCxHQUFHLENBQUMsSUFBSSxDQUFDLEdBQUcsQ0FBQyxDQUFDO1NBQ2pCO2FBQUk7WUFDRCxHQUFHLENBQUMsSUFBSSxDQUFDLEtBQUssQ0FBQyxDQUFDO1NBQ25CO0lBQ0wsQ0FBQyxDQUFDLENBQUE7QUFDTixDQUFDLENBQUE7QUFSVSxRQUFBLFFBQVEsWUFRbEI7QUFFTSxJQUFJLE9BQU8sR0FBRyxVQUFDLEdBQVcsRUFBRSxHQUFZO0lBQzNDLGNBQUksQ0FBQyxRQUFRLENBQUMsR0FBRyxDQUFDLE1BQU0sQ0FBQyxFQUFFLEVBQUUsVUFBQyxHQUFPLEVBQUUsSUFBUTtRQUMzQyxJQUFHLEdBQUcsRUFBQztZQUNILEdBQUcsQ0FBQyxJQUFJLENBQUMsR0FBRyxDQUFDLENBQUE7U0FDaEI7YUFBSTtZQUNELEdBQUcsQ0FBQyxJQUFJLENBQUMsSUFBSSxDQUFDLENBQUE7U0FDakI7SUFDTCxDQUFDLENBQUMsQ0FBQTtBQUNOLENBQUMsQ0FBQTtBQVJVLFFBQUEsT0FBTyxXQVFqQjtBQUVNLElBQUksT0FBTyxHQUFHLFVBQUMsR0FBVyxFQUFFLEdBQVk7SUFDM0MsSUFBSSxJQUFJLEdBQUcsSUFBSSxjQUFJLENBQUMsR0FBRyxDQUFDLElBQUksQ0FBQyxDQUFDO0lBQzlCLElBQUksQ0FBQyxJQUFJLENBQUMsVUFBQyxHQUFPO1FBQ2QsSUFBRyxHQUFHLEVBQUM7WUFDSCxHQUFHLENBQUMsSUFBSSxDQUFDLEdBQUcsQ0FBQyxDQUFBO1NBQ2hCO2FBQUk7WUFFRCxHQUFHLENBQUMsSUFBSSxDQUFDLElBQUksQ0FBQyxDQUFBO1NBQ2pCO0lBQ0wsQ0FBQyxDQUFDLENBQUE7QUFDTixDQUFDLENBQUE7QUFWVSxRQUFBLE9BQU8sV0FVakI7QUFFTSxJQUFJLFVBQVUsR0FBRyxVQUFDLEdBQVcsRUFBRSxHQUFZO0lBQzlDLGNBQUksQ0FBQyxTQUFTLENBQUMsRUFBRSxHQUFHLEVBQUMsR0FBRyxDQUFDLE1BQU0sQ0FBQyxFQUFFLEVBQUUsRUFBRSxVQUFDLEdBQU87UUFDMUMsSUFBRyxHQUFHLEVBQUM7WUFDSCxHQUFHLENBQUMsSUFBSSxDQUFDLEdBQUcsQ0FBQyxDQUFBO1NBQ2hCO2FBQUk7WUFDRCxHQUFHLENBQUMsSUFBSSxDQUFDLGVBQWUsQ0FBQyxDQUFDO1NBQzdCO0lBQ0wsQ0FBQyxDQUFDLENBQUE7QUFDTixDQUFDLENBQUE7QUFSVSxRQUFBLFVBQVUsY0FRcEI7QUFFTSxJQUFJLFVBQVUsR0FBRyxVQUFDLEdBQVcsRUFBRSxHQUFZO0lBQzlDLGNBQUksQ0FBQyxpQkFBaUIsQ0FBQyxHQUFHLENBQUMsTUFBTSxDQUFDLEVBQUUsRUFBRSxHQUFHLENBQUMsSUFBSSxFQUFDLFVBQUMsR0FBTztRQUNuRCxJQUFHLEdBQUcsRUFBQztZQUNILEdBQUcsQ0FBQyxJQUFJLENBQUMsR0FBRyxDQUFDLENBQUE7U0FDaEI7YUFBSTtZQUNELEdBQUcsQ0FBQyxJQUFJLENBQUMsK0JBQStCLENBQUMsQ0FBQztTQUM3QztJQUNMLENBQUMsQ0FBQyxDQUFBO0FBQ04sQ0FBQyxDQUFBO0FBUlUsUUFBQSxVQUFVLGNBUXBCO0FBRUQsd0RBQXdEO0FBQ3hELDRFQUE0RTtBQUM1RSxtQkFBbUI7QUFDbkIsNEJBQTRCO0FBQzVCLGlCQUFpQjtBQUNqQix5REFBeUQ7QUFDekQsWUFBWTtBQUNaLFNBQVM7QUFDVCxJQUFJO0FBQ0osa0JBQWUsRUFBQyxRQUFRLGtCQUFBLEVBQUUsT0FBTyxpQkFBQSxFQUFFLFVBQVUsb0JBQUEsRUFBRSxVQUFVLG9CQUFBLEVBQUUsT0FBTyxpQkFBQSxFQUFDLENBQUEifQ==