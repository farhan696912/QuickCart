import mongoose from "mongoose";


const userSchema = new mongoose.Schema({
    _id:{ type : string, required:True},
    name: { type : string, required:True},
    email: { type : string, required:True, unique:true },
    imageUrl: { type : string, required:True},
    cartItems: { type : Object, default: {} }
},{ minimize: false })

const User = mongoose.models.user || mongoose.model('user',userSchema)

export default User
