import mongoose from "mongoose";

// Constants
import { DB_NAME } from "../constants.js";

const connectDB = async () => {
  try {
    const connectionInstance = await mongoose.connect(
      `${process.env.MONGODB_URI}/${DB_NAME}`
    );
    console.log(
      "-----------------------\nConnection successful!!\n-----------------------"
    );
    console.log(`DB Host: ${connectionInstance.connection.host}`);
  } catch (error) {
    console.log(`DB Connection ERROR: ${error}`);
    process.exit(1);
  }
};

export { connectDB };
