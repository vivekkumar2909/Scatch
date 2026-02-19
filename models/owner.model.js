import mongoose from "mongoose";

const ownerSchema = new mongoose.Schema({
    fullname: {
        type: String,
        required: true,
    },

    email: {
        type: String,
        required: true,
    },

    password: {
        type: String,
        required: true,
    },
    products: [
        {
            type: mongoose.Schema.Types.ObjectId,
            ref: "Product"
        }
    ],

    gstIn: Number,

    picture: String
});

const Owner = mongoose.model("Owner", ownerSchema);

export default Owner;
