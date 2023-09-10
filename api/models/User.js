import mongoose, { Mongoose } from 'mongoose';
const { Schema } = mongoose;

const UserSchema = new mongoose.Schema({
     
    id:{
          type: Number,
          unique:true,
    },

    firstname: {
        type: String,
        required: true,

    }, 

    lastname: {
        type:String,
        required: true,
        
    }, 

    email: {
        type:String,
        required: true,
        unique:true,
    }, 

    country: {
        type:String,
        required: true,
    }
});

export default mongoose.model("User", UserSchema);