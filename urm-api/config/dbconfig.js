import mongoose from "mongoose";

const DATABASE_URL = "mongodb://localhost:27017/urm-db"

export const connectToMongoDb = () => {
    try {
        // initialize database connection
        const connection = mongoose.connect(DATABASE_URL);

        // success
        if(connection) {
            console.log("Database Connection successfully at "+DATABASE_URL);
        }
    } catch (error) {
        console.log("Error Connecting to Database \n ERROR: "+error);
    }
}