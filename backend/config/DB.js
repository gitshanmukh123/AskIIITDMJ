import mongoose from "mongoose";
const connectDb=async()=>{
    try {
        const mongoUrl = process.env.MONGO_URL || process.env.MONGOSE_URL;

        if (!mongoUrl) {
            throw new Error("MONGO_URL is required");
        }

        const res = await mongoose.connect(mongoUrl);
        if(res){
            console.log("DB connectred successfully");
            
        }
    } catch (error) {
        console.log(error);
        
    }
}

export default connectDb;
