const mongoose = require("mongoose");

const CartSchema = new mongoose.Schema(
    {
   userId: {type: String , required:true},
    products: [
        {
            productId:{
                type:string
            },
            quantity:{
                type: Number,
                default: 1,
            },
        },
    ],   
},
{timestamps: true}
);

module.ex = mongoose.model("Cart",CartSchema);