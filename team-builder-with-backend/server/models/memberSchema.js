import { Schema, model } from "mongoose";

const memberSchema = new Schema({
  name: { type: String, required: true},
  age: { type: Number, required: true},
  description: { type: String, required: true},
  image: { type: String, required: true},
})

const Members = model('Members', memberSchema);

export default Members;