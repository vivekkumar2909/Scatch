import mongoose from "mongoose";
import dotenv from 'dotenv'
import debug from 'debug'



dotenv.config();
const dbg = debug("development:mongoose");

const connectDB = async () => {
    try {
        debugger; // 👈 Debug before connecting

        await mongoose.connect(process.env.MONGO_URL);

        // console.log(process.env.MONGO_URL);

        debugger; // 👈 Debug after successful connection
        dbg("✅ MongoDB Connected Successfully");
        // console.log('object')

    } catch (err) {
        debugger; // 👈 Debug if error happens
        console.error("❌ MongoDB Connection Error:", err);
        process.exit(1);
    }
};

export default connectDB;



// const mongoose = require("mongoose");
// const config = require("config");
// const debug = require("debug")("development:mongoose");

// mongoose
//     .connect(`${config.get("MONGODB_URI")}/scatch`)
//     .then(() => {
//         debug("MongoDB Connected");
//     })
//     .catch((err) => {
//         debug(err);
//     });

// module.exports = mongoose.connection;
