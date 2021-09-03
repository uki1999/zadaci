import { Document } from 'mongoose';

export default interface ISong extends Document {
        title:String,
        author:String,
        like: Number,
        dislike: Number,
    }