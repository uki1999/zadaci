import { NextFunction, Request, Response } from 'express';
import mongoose from 'mongoose';
import bcryptjs from 'bcryptjs';
import logging from '../config/logging';
import User from '../models/user';
import Song from '../models/song';
import signJWT from '../functions/signJTW';


const createSong = (req: Request, res: Response, next: NextFunction) => {
    let { author, title } = req.body;

    const book = new Song({
        _id: new mongoose.Types.ObjectId(),
        author,
        title
    });

    return book
        .save()
        .then((result) => {
            return res.status(201).json({
                book: result
            });
        })
        .catch((error) => {
            return res.status(500).json({
                message: error.message,
                error
            });
        });
};
const getAllSongs = (req: Request, res: Response, next: NextFunction) => {
    Song.find()
        .exec()
        .then((songs) => {
            return res.status(200).json({
                songs: songs,
                count: songs.length
            });
        })
        .catch((error) => {
            return res.status(500).json({
                message: error.message,
                error
            });
        });
};

const getSong = (req: Request, res: Response, next: NextFunction) => {
    Song.findById(req.params.id)
        .exec()
        .then((songs) => {
            return res.status(200).json({
                songs: songs,
            });
        })
        .catch((error) => {
            return res.status(500).json({
                message: error.message,
                error
            });
        });
};

const updateSong = (req: Request, res: Response, next: NextFunction) => {
    Song.findByIdAndUpdate(req.params.id, req.body)
        .exec()
        .then((songs) => {
            return res.status(200).json({
                songs: songs,
            });
        })
        .catch((error) => {
            return res.status(500).json({
                message: error.message,
                error
            });
        });
};

const reactSong =  (req: Request, res: Response, next: NextFunction) => {
    Song.findByIdAndUpdate(req.params.id, req.body.like, req.body.dislike)
        .exec()
        .then((songs) => {
            return res.status(200).json({
                songs: songs,
            });
        })
        .catch((error) => {
            return res.status(500).json({
                message: error.message,
                error
            });
        });
};

export default { createSong, getAllSongs,getSong,updateSong,reactSong };