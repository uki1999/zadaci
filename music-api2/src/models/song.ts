import mongoose, { Model } from "mongoose";
import { Document } from "mongoose";


const uri: string = 'mongodb://127.0.0.1:27017/local';


mongoose.connect(uri, (err:any)=>{
    if(err){
        console.log(err.message)
    }else{
        console.log("Connected to database!")
    }
})


export const SongSchema = new mongoose.Schema({
    title: {type:String, required:true},
    author: {type:String, required:true},
    like: {type:Number, default:0},
    dislike: {type:Number, default:0},
});

const Song = mongoose.model('Song', SongSchema);
export default Song;