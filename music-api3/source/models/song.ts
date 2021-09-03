import mongoose, { Schema } from 'mongoose';
import IUser from '../interfaces/user';
import ISong from '../interfaces/song';


const SongSchema: Schema = new Schema(
    {
        title: { type: String, required: true},
        author: { type: String, required: true},
        like: { type: Number, required: true},
        dislike: { type: Number, required: true},
    }
)
export default mongoose.model<ISong>('User', SongSchema);