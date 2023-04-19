import { Schema, model } from 'mongoose';
// import cartSchema from './cart.js';

const userSchema = new Schema(
    {
        store: {
            type: Array,
        },
        fullName: {
            type: String,
        },
        email: {
            type: String,
            unique: true,
        },
        password: {
            type: String,
        },
        birthDate: {
            type: Date,
        },
        genre: {
            type: String,
        },
        country: {
            type: String,
        },
        address: {
            type: String,
        },
        tel: {
            type: Number,
        },
        image: {
            type: String,
        },
        identificationType: {
            type: Number
        },
        identificationNumber: {
            type: Number
        },
        isAdmin: {
            type: Boolean,
        },
        active: {
            type: Boolean,
        },
    },
    {
        timestamp: true,
        versionKey: false,
    }
)


const userModel = model('User', userSchema)

export default userModel