import mongoose from "mongoose";

export async function connect(){
    try {
        mongoose.connect(process.env.MONGO_URI!)
        const connection = mongoose.connection

        connection.on('connecte', ()=> {
            console.log('MongoDB connected');
        })

        connection.on('error', (err)=> {
            console.log('MongoDB connection error , please make sure bd is up and running + err');
            process.exit()
        })

    } catch (error) {
        console.log('Something went wrong in connection to DB');
        console.log(error);
    }
}