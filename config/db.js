import mongoose from "mongoose";

const CONNECTION_STRING =
  "mongodb+srv://notesUser:notesDatabase321@cluster0.zfje7ts.mongodb.net/?appName=Cluster0";

export const connectDB = async () => {
  try {
    await mongoose.connect(CONNECTION_STRING);
    console.log("MongoDB connected");
  } catch (error) {
    console.error("MongoDB connection failed", error);
    process.exit(1);
  }
};
