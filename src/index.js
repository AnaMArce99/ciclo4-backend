import app from "./app.js";
import { PORT } from "./config.js";
import { connectDB } from "./db/connect";

connectDB();

app.listen(PORT);
console.log("Server on port", app.get("port"));