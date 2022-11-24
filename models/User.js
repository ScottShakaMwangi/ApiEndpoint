const mongoose = require("mongoose");
const { boolean } = require("webidl-conversions");

const UserSchema = new mongoose.Schema(
    {
    username: {type: String , required:true, unique:true},
    email: {type: String , required:true, unique:true},
    password: {type: String , required:true,},
isAddmin:{
    type:boolean,
    default:false,
},
},
{timestamps: true}
);

module.ex = mongoose.model("User",UserSchema);