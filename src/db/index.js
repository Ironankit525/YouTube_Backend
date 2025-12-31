import mongoose, { connect } from "mongoose";

import { DB_NAME } from "../constants.js";


const connectdb = async () => {
    try {
        const connectionInstance = await mongoose.connect(`${process.env.MONGO_DB_URL}/${DB_NAME}`)
        console.log(`/n mongodb connected !! DB host:${connectionInstance.connection.host}`);
    } catch (error) {
        console.log("mongoose connaton error", error);
        process.exit(1)
    }
}

export default connectdb;