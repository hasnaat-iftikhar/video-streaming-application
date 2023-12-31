import { app } from "./app.js";
import { connectDB } from "./db/index.js";

// Packages
import dotenv from "dotenv";
dotenv.config({
  path: "./.env",
});

connectDB()
  .then(() => {
    const PORT = process.env.PORT || 8000;
    app.listen(PORT, () => {
      console.log(`Server is running on PORT: ${PORT}`);
    });
  })
  .catch((error) => console.log(`MONGO DB Connection ERROR: ${error}`));
