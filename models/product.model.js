import mongoose from "mongoose";

const productSchema = new mongoose.Schema({
    image: {
        type: String,
        required: true,
    },

    name: {
        type: String,
        required: true,
    },

    price: {
        type: Number,
        required: true,
    },

    discount: {
        type: Number,   // better as Number if it's percentage
        default: 0
    },

    bgColor: {
        type: String,
    },

    panelColor: {
        type: String,
    },

    textColor: {
        type: String,
    }
}, { timestamps: true });

const Product = mongoose.model("Product", productSchema);

export default Product;
