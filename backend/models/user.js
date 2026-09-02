import mongoose from "mongoose";

const userSchema = new mongoose.Schema({
    userName: { type: String, unique: true },
    password: { type: String },
    email: { type: String, unique: true },
}, { timestamps: true })

export const User = mongoose.model('user', userSchema)