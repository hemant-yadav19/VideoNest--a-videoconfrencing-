import mongoose, { Schema } from "mongoose";

const meetingSchema = new Schema({
    user_id:{
        type:String
    },
    meeting_code:{
        type:Date , default:Date.now,required:true
    }
});

const Meeting = mongoose.model("meeting" , meetingSchema);

export {Meeting};