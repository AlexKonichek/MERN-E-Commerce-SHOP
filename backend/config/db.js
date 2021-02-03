import mongoose from 'mongoose';

const connectDB = async () => {
    try {
        const conn = await mongoose.connect(process.env.MONGO_URI, {
            useUnifiedTopology: true,
            useNewUrlParser:true,
            useCreateIndex:true
        })

        console.log(`DB is connected in ${conn.connection.host}`)
    } catch (error) {
        console.error(error.message);
        procces.exit(1);
    }
}

export default connectDB;