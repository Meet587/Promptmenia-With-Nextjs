import mongoose from "mongoose";

let isConnected = false; //track connection

export const connectToDB = async () => {
  mongoose.set("strictQuery", true);
  if (isConnected) {
    console.log("mongodb is already connected");
    return;
  }

  try {
    await mongoose.connect(process.env.MONGODB_URL, {
      dbName: "share_promt",
      useNewUrlParser: true,
      UseUnifiedTopology: true,
    });
    isConnected = true;
    console.log("mongodb is connected");
  } catch (error) {
    console.log(error);
  }
};
