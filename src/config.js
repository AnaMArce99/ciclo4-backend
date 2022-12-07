import { config } from "dotenv";
config();

export const MONGODB_URI =
  process.env.MONGODB_URI || "mongodb://instaya_db/apicompany";
export const PORT = process.env.PORT || 8000;
