import { Schema, model } from "mongoose";

const userSchema = Schema({
    id: {
        type: Number,
        required: true,
        unique: true
      },
      first_name: {
        type: String,
        required: true
      },
      last_name: {
        type: String,
        required: true
      },
      company_name: {
        type: String,
        required: true
      },
      age: {
        type: Number,
        required: true
      },
      city: {
        type: String,
        required: true
      },
      state: {
        type: String,
        required: true
      },
      zip: {
        type: Number,
        required: true
      },
      email: {
        type: String,
        required: true,
        unique: true
      },
      web: {
        type: String,
        required: true
      }

},{ timestamps: true });

const UserModel = model("user", userSchema);
export default UserModel;
