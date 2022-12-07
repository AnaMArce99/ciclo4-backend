import { Schema, model } from "mongoose";

const order = new Schema({
  date: {
    type: Date,
    required: true,
  },
  time: {
    type: String,
    required: true,
  },
  user: {
    ref: "User",
    type: Schema.Types.ObjectId,
    required: true,
  },
  address: {
    type: String,
    required: true,
  },
  status: {
    type: String,
    required: true,
  },
  city: {
    type: String,
    required: true,
  },
  length: {
    type: Number,
    required: true,
  },
  height: {
    type: Number,
    required: true,
  },
  width: {
    type: Number,
    required: true,
  },
  weight: {
    type: Number,
    required: true,
  },
  dest_name: {
    type: String,
    required: true,
  },
  dest_id: {
    type: String,
    required: true,
  },
  dest_city: {
    type: String,
    required: true,
  },
  dest_address: {
    type: String,
    required: true,
  },
});

export default model("Order", order);