import mongoose from "mongoose";

const connectDB = async () => {
  try {
    const connectionInstance = await mongoose.connect(
      `${process.env.MONGODB_URI}`
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