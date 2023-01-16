const mongoose = require("mongoose");
const userSchema = mongoose.Schema(
  {
    first_name: {
      type: String,
      required: true,
    },
    last_name: {
      type: String,
      required: true,
    },
    password: {
      type: String,
      required: true,
      minLength: 5,
    },
    email: {
      type: String,
      required: true,
    },
    token: {
      type: String,
    },
    verified: {
      type: Boolean,
      default: false,
    },
    verification_code: {
      type: String,
    },
    role: {
      type: String,
      required: true,
      default: "guest",
    },
  },
  { timestamps: true }
);
module.exports.User = mongoose.model("user1", userSchema);
