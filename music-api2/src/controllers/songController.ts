import {Request, Response } from "express";
import Song  from '../models/song';


export let allSongs = (req:Request, res:Response)=>{
    let songs = Song.find((err:any, songs:any)=>{
        if(err){
            res.send(err);
        }else{
            res.send(songs);
        }
    })
}

export let getSong = (req:Request, res:Response)=>{
    Song.findById(req.params.id, (err:any, song:any)=>{
        if(err){
            res.send(err)
        }else{
            res.send(song)
        }
    })
}

export let addSong = (req:Request, res:Response)=>{
    let song = new Song(req.body);
    song.save((err:any)=>{
        if(err){
            res.send(err)
        }else{

            res.send(song)
        }
    })
}

export let deleteSong = (req:Request, res:Response)=>{
    Song.deleteOne({ _id:req.params.id }, (err:any)=>{
        if(err){
            res.send(err)
        }else{
            res.send("Song deleted!");
        }
    })
}

export let updateSong = (req:Request, res:Response)=>{
    Song.findByIdAndUpdate(req.params.id, req.body,(err:any)=>{
        if(err){
            res.send(err)
        }else{
            res.send("Song information are updated!");
        }
    })
}

// export let reactLike = (req:Request, res:Response)=>{
//     Song.findByIdAndUpdate(req.params.id, req.body,(err:any, song:any)=>{
//         if(err){
//             res.send(err)
//         }else{
//             res.send("Song information are updated!");
//         }
//     })
// }
export default {allSongs, getSong, deleteSong, updateSong, addSong}